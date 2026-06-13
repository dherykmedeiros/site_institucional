import { createClient } from "@supabase/supabase-js";
import { defaultContent, SiteContent } from "./defaultContent";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Initialize server-side Supabase client with persistSession disabled for safety
const supabaseServer = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
  },
});

export async function getSiteContent(): Promise<SiteContent> {
  try {
    if (!supabaseUrl || !supabaseAnonKey) {
      console.warn("Supabase credentials missing on server. Using default content fallback.");
      return defaultContent;
    }

    const { data, error } = await supabaseServer
      .from("site_content")
      .select("key, value");

    if (error) {
      console.error("Error fetching site content from Supabase, using default fallback:", error);
      return defaultContent;
    }

    if (!data || data.length === 0) {
      console.warn("No content found in site_content table. Using default fallback.");
      return defaultContent;
    }

    // Clone defaultContent to merge database content
    const mergedContent = JSON.parse(JSON.stringify(defaultContent));
    
    for (const row of data) {
      const key = row.key as keyof SiteContent;
      if (key in defaultContent) {
        // Deep/shallow merge depending on objects
        if (typeof defaultContent[key] === "object" && defaultContent[key] !== null) {
          mergedContent[key] = {
            ...defaultContent[key],
            ...row.value
          };
        } else {
          mergedContent[key] = row.value;
        }
      }
    }

    return mergedContent as SiteContent;
  } catch (err) {
    console.error("Unexpected error during getSiteContent, returning defaults:", err);
    return defaultContent;
  }
}
export const revalidate = 0; // Disable caching to fetch fresh data for dynamic editing

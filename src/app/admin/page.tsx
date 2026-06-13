"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import styles from "./admin.module.css";
import { defaultContent, SiteContent, ContentKey, NavItem, StatItem, ServiceItem, DifferentialItem, ProcessStep, TestimonialItem, FaqItem } from "@/lib/defaultContent";

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState<any>(null);
  
  // Site Content State loaded from database
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [activeTab, setActiveTab] = useState<ContentKey>("general");
  const [saving, setSaving] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Authenticate user
  useEffect(() => {
    const checkUser = async () => {
      const { data: { session: currentSession } } = await supabase.auth.getSession();
      if (!currentSession) {
        router.push("/admin/login");
      } else {
        setSession(currentSession);
        fetchContent();
      }
    };
    checkUser();
  }, [router]);

  // Fetch content from Supabase
  const fetchContent = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("site_content")
        .select("key, value");

      if (error) throw error;

      if (data && data.length > 0) {
        const dbContent = { ...defaultContent } as any;
        data.forEach((row) => {
          if (row.key && row.value) {
            dbContent[row.key] = {
              ...defaultContent[row.key as ContentKey],
              ...row.value
            };
          }
        });
        setContent(dbContent);
      }
    } catch (err) {
      console.error("Erro ao carregar conteúdo:", err);
      showToast("Erro ao carregar conteúdo do banco de dados.");
    } finally {
      setLoading(false);
    }
  };

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 3000);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  // Helper to update specific sub-field
  const updateSectionField = (section: ContentKey, field: string, value: any) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  // Save current active tab content to Supabase
  const handleSaveSection = async () => {
    setSaving(true);
    try {
      const tabData = content[activeTab];
      const { error } = await supabase
        .from("site_content")
        .upsert({
          key: activeTab,
          value: tabData,
          updated_at: new Date().toISOString(),
        }, { onConflict: "key" });

      if (error) throw error;
      showToast("Alterações salvas com sucesso!");
    } catch (err) {
      console.error("Erro ao salvar seção:", err);
      showToast("Falha ao salvar alterações.");
    } finally {
      setSaving(false);
    }
  };

  // Upload file helper to Supabase Storage
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, section: ContentKey, fieldName: string) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    const fileExt = file.name.split(".").pop();
    const fileName = `${activeTab}_${fieldName}_${Date.now()}.${fileExt}`;
    
    setSaving(true);
    showToast("Fazendo upload da imagem...");

    try {
      const { error: uploadError } = await supabase.storage
        .from("site-media")
        .upload(fileName, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from("site-media")
        .getPublicUrl(fileName);

      updateSectionField(section, fieldName, publicUrl);
      showToast("Upload concluído!");
    } catch (err) {
      console.error("Erro no upload:", err);
      showToast("Erro ao enviar imagem.");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.loadingScreen}>
        <div className={styles.spinner}></div>
        <p>Carregando painel administrativo...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logoArea}>
          <div className={styles.logo}>
            CENA<span className={styles.logoAccent}>DT</span>
          </div>
          <div className={styles.adminTag}>Administrativo</div>
        </div>

        <nav className={styles.menuList}>
          <ul>
            <li className={styles.menuItem}>
              <button 
                onClick={() => setActiveTab("general")} 
                className={`${styles.menuBtn} ${activeTab === "general" ? styles.menuBtnActive : ""}`}
              >
                ⚙️ Geral
              </button>
            </li>
            <li className={styles.menuItem}>
              <button 
                onClick={() => setActiveTab("header")} 
                className={`${styles.menuBtn} ${activeTab === "header" ? styles.menuBtnActive : ""}`}
              >
                🧭 Cabeçalho (Menu)
              </button>
            </li>
            <li className={styles.menuItem}>
              <button 
                onClick={() => setActiveTab("hero")} 
                className={`${styles.menuBtn} ${activeTab === "hero" ? styles.menuBtnActive : ""}`}
              >
                ⚡ Hero Banner
              </button>
            </li>
            <li className={styles.menuItem}>
              <button 
                onClick={() => setActiveTab("about")} 
                className={`${styles.menuBtn} ${activeTab === "about" ? styles.menuBtnActive : ""}`}
              >
                ℹ️ Sobre Nós
              </button>
            </li>
            <li className={styles.menuItem}>
              <button 
                onClick={() => setActiveTab("services")} 
                className={`${styles.menuBtn} ${activeTab === "services" ? styles.menuBtnActive : ""}`}
              >
                💼 Cursos e Serviços
              </button>
            </li>
            <li className={styles.menuItem}>
              <button 
                onClick={() => setActiveTab("differentials")} 
                className={`${styles.menuBtn} ${activeTab === "differentials" ? styles.menuBtnActive : ""}`}
              >
                ⭐️ Diferenciais
              </button>
            </li>
            <li className={styles.menuItem}>
              <button 
                onClick={() => setActiveTab("process")} 
                className={`${styles.menuBtn} ${activeTab === "process" ? styles.menuBtnActive : ""}`}
              >
                📈 Processo
              </button>
            </li>
            <li className={styles.menuItem}>
              <button 
                onClick={() => setActiveTab("testimonials")} 
                className={`${styles.menuBtn} ${activeTab === "testimonials" ? styles.menuBtnActive : ""}`}
              >
                💬 Depoimentos
              </button>
            </li>
            <li className={styles.menuItem}>
              <button 
                onClick={() => setActiveTab("faq")} 
                className={`${styles.menuBtn} ${activeTab === "faq" ? styles.menuBtnActive : ""}`}
              >
                ❓ Perguntas (FAQ)
              </button>
            </li>
            <li className={styles.menuItem}>
              <button 
                onClick={() => setActiveTab("cta")} 
                className={`${styles.menuBtn} ${activeTab === "cta" ? styles.menuBtnActive : ""}`}
              >
                📞 Chamada Final (CTA)
              </button>
            </li>
            <li className={styles.menuItem}>
              <button 
                onClick={() => setActiveTab("footer")} 
                className={`${styles.menuBtn} ${activeTab === "footer" ? styles.menuBtnActive : ""}`}
              >
                📄 Rodapé
              </button>
            </li>
          </ul>
        </nav>

        <div className={styles.logoutArea}>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Sair do Painel
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className={styles.mainContent}>
        <div className={styles.topBar}>
          <div className={styles.titleArea}>
            <h1>Editar Conteúdo</h1>
            <p>Alterações feitas aqui serão refletidas instantaneamente na página principal do site.</p>
          </div>
          <div className={styles.saveArea}>
            <a href="/" target="_blank" className={styles.btnViewSite}>
              Visualizar Site ↗
            </a>
            <button onClick={handleSaveSection} disabled={saving} className={styles.btnSave}>
              {saving ? "Salvando..." : "Salvar Alterações"}
            </button>
          </div>
        </div>

        {/* Tab Renderers */}
        {activeTab === "general" && (
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Geral &amp; Identidade</h2>
            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Logo Texto Principal (Ex: CENA)</label>
                <input 
                  type="text" 
                  className={styles.input}
                  value={content.general.logoText} 
                  onChange={(e) => updateSectionField("general", "logoText", e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Logo Texto Subtítulo/Accent (Ex: DT)</label>
                <input 
                  type="text" 
                  className={styles.input}
                  value={content.general.logoSub} 
                  onChange={(e) => updateSectionField("general", "logoSub", e.target.value)}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Link Completo do WhatsApp</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.general.whatsappUrl} 
                onChange={(e) => updateSectionField("general", "whatsappUrl", e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Logo Imagem (Opcional - Substitui o texto se preenchido)</label>
              <div className={styles.uploadContainer}>
                <div className={styles.preview}>
                  {content.general.logoImage ? (
                    <img src={content.general.logoImage} alt="Logo" />
                  ) : (
                    <span className={styles.noPreview}>Sem logo</span>
                  )}
                </div>
                <div>
                  <label htmlFor="logo-upload" className={styles.btnUpload}>Enviar Nova Imagem</label>
                  <input 
                    type="file" 
                    id="logo-upload" 
                    accept="image/*"
                    className={styles.fileInput} 
                    onChange={(e) => handleFileUpload(e, "general", "logoImage")}
                  />
                  <div className={styles.uploadInfo}>PNG, JPG ou SVG recomendados.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "header" && (
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Links de Navegação do Menu</h2>
            <p style={{ marginBottom: "1.5rem", fontSize: "0.9rem", color: "var(--text-secondary)" }}>
              Você pode alterar o rótulo e o link (âncora) de cada item do menu.
            </p>
            {content.header.navItems.map((item, index) => (
              <div key={index} className={styles.row} style={{ marginBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.02)", paddingBottom: "1rem" }}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Nome do Item {index + 1}</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={item.label}
                    onChange={(e) => {
                      const newItems = [...content.header.navItems];
                      newItems[index].label = e.target.value;
                      updateSectionField("header", "navItems", newItems);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Link / Âncora (Ex: #inicio)</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={item.href}
                    onChange={(e) => {
                      const newItems = [...content.header.navItems];
                      newItems[index].href = e.target.value;
                      updateSectionField("header", "navItems", newItems);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "hero" && (
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Hero Banner</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Overline (Linha acima do título)</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.hero.overline} 
                onChange={(e) => updateSectionField("hero", "overline", e.target.value)}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Título Principal</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.hero.title} 
                onChange={(e) => updateSectionField("hero", "title", e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Subtítulo / Descrição</label>
              <textarea 
                className={styles.textarea}
                value={content.hero.subtitle} 
                onChange={(e) => updateSectionField("hero", "subtitle", e.target.value)}
              />
            </div>

            <h3 className={styles.sectionTitle} style={{ marginTop: "2rem", fontSize: "1.1rem" }}>Estatísticas Rápidas (Banner Direito)</h3>
            {content.hero.stats.map((stat, index) => (
              <div key={index} className={styles.row}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Valor {index + 1} (Ex: +5.000)</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={stat.value}
                    onChange={(e) => {
                      const newStats = [...content.hero.stats];
                      newStats[index].value = e.target.value;
                      updateSectionField("hero", "stats", newStats);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Rótulo {index + 1} (Ex: Anos de Mercado)</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={stat.label}
                    onChange={(e) => {
                      const newStats = [...content.hero.stats];
                      newStats[index].label = e.target.value;
                      updateSectionField("hero", "stats", newStats);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "about" && (
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Sobre Nós</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Overline</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.about.overline} 
                onChange={(e) => updateSectionField("about", "overline", e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Título da Seção</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.about.title} 
                onChange={(e) => updateSectionField("about", "title", e.target.value)}
              />
            </div>

            <h3 className={styles.sectionTitle} style={{ marginTop: "2rem", fontSize: "1.1rem" }}>Parágrafos do Texto Explicativo</h3>
            {content.about.paragraphs.map((p, index) => (
              <div key={index} className={styles.formGroup}>
                <label className={styles.label}>Parágrafo {index + 1}</label>
                <textarea 
                  className={styles.textarea}
                  value={p}
                  onChange={(e) => {
                    const newParagraphs = [...content.about.paragraphs];
                    newParagraphs[index] = e.target.value;
                    updateSectionField("about", "paragraphs", newParagraphs);
                  }}
                />
              </div>
            ))}

            <h3 className={styles.sectionTitle} style={{ marginTop: "2rem", fontSize: "1.1rem" }}>Estatísticas da Lateral</h3>
            {content.about.stats.map((stat: any, index) => (
              <div key={index} className={styles.row}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Valor {index + 1} (Ex: 2016)</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={stat.number}
                    onChange={(e) => {
                      const newStats = [...content.about.stats] as any[];
                      newStats[index].number = e.target.value;
                      updateSectionField("about", "stats", newStats);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Rótulo {index + 1}</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={stat.label}
                    onChange={(e) => {
                      const newStats = [...content.about.stats] as any[];
                      newStats[index].label = e.target.value;
                      updateSectionField("about", "stats", newStats);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "services" && (
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Cursos &amp; Serviços</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Overline</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.services.overline} 
                onChange={(e) => updateSectionField("services", "overline", e.target.value)}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Título</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.services.title} 
                onChange={(e) => updateSectionField("services", "title", e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Subtítulo / Descrição</label>
              <textarea 
                className={styles.textarea}
                value={content.services.subtitle} 
                onChange={(e) => updateSectionField("services", "subtitle", e.target.value)}
              />
            </div>

            <h3 className={styles.sectionTitle} style={{ marginTop: "2.5rem" }}>Lista de Cursos</h3>
            {content.services.coursesList.map((course, index) => (
              <div key={course.id || index} className={styles.listItem}>
                <div className={styles.listHeader}>
                  <span className={styles.listTitle}>Curso #{index + 1}: {course.title || "Sem Nome"}</span>
                  <button 
                    onClick={() => {
                      const newList = content.services.coursesList.filter((_, i) => i !== index);
                      updateSectionField("services", "coursesList", newList);
                    }}
                    className={styles.btnRemove}
                  >
                    Excluir
                  </button>
                </div>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Título do Curso</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={course.title}
                      onChange={(e) => {
                        const newList = [...content.services.coursesList];
                        newList[index].title = e.target.value;
                        updateSectionField("services", "coursesList", newList);
                      }}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Categoria</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={course.category}
                      onChange={(e) => {
                        const newList = [...content.services.coursesList];
                        newList[index].category = e.target.value;
                        updateSectionField("services", "coursesList", newList);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Descrição Curta</label>
                    <textarea 
                      className={styles.textarea}
                      value={course.desc}
                      onChange={(e) => {
                        const newList = [...content.services.coursesList];
                        newList[index].desc = e.target.value;
                        updateSectionField("services", "coursesList", newList);
                      }}
                    />
                  </div>
                  <div className={styles.formGroup} style={{ alignSelf: "end" }}>
                    <label className={styles.label}>Texto do Link / Botão</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={course.linkText}
                      onChange={(e) => {
                        const newList = [...content.services.coursesList];
                        newList[index].linkText = e.target.value;
                        updateSectionField("services", "coursesList", newList);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button 
              onClick={() => {
                const newList = [
                  ...content.services.coursesList,
                  { id: `course_${Date.now()}`, category: "Curso", title: "Novo Curso", desc: "Descrição do curso", linkText: "Fazer Inscrição" }
                ];
                updateSectionField("services", "coursesList", newList);
              }}
              className={styles.btnAddItem}
            >
              + Adicionar Novo Curso
            </button>

            <h3 className={styles.sectionTitle} style={{ marginTop: "3rem" }}>Lista de Serviços</h3>
            {content.services.servicesList.map((service, index) => (
              <div key={service.id || index} className={styles.listItem}>
                <div className={styles.listHeader}>
                  <span className={styles.listTitle}>Serviço #{index + 1}: {service.title || "Sem Nome"}</span>
                  <button 
                    onClick={() => {
                      const newList = content.services.servicesList.filter((_, i) => i !== index);
                      updateSectionField("services", "servicesList", newList);
                    }}
                    className={styles.btnRemove}
                  >
                    Excluir
                  </button>
                </div>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Título do Serviço</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={service.title}
                      onChange={(e) => {
                        const newList = [...content.services.servicesList];
                        newList[index].title = e.target.value;
                        updateSectionField("services", "servicesList", newList);
                      }}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Categoria</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={service.category}
                      onChange={(e) => {
                        const newList = [...content.services.servicesList];
                        newList[index].category = e.target.value;
                        updateSectionField("services", "servicesList", newList);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Descrição Curta</label>
                    <textarea 
                      className={styles.textarea}
                      value={service.desc}
                      onChange={(e) => {
                        const newList = [...content.services.servicesList];
                        newList[index].desc = e.target.value;
                        updateSectionField("services", "servicesList", newList);
                      }}
                    />
                  </div>
                  <div className={styles.formGroup} style={{ alignSelf: "end" }}>
                    <label className={styles.label}>Texto do Link / Botão</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={service.linkText}
                      onChange={(e) => {
                        const newList = [...content.services.servicesList];
                        newList[index].linkText = e.target.value;
                        updateSectionField("services", "servicesList", newList);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button 
              onClick={() => {
                const newList = [
                  ...content.services.servicesList,
                  { id: `service_${Date.now()}`, category: "Assessoria", title: "Novo Serviço", desc: "Descrição do serviço", linkText: "Falar com Consultor" }
                ];
                updateSectionField("services", "servicesList", newList);
              }}
              className={styles.btnAddItem}
            >
              + Adicionar Novo Serviço
            </button>
          </div>
        )}

        {activeTab === "differentials" && (
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Diferenciais</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Overline</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.differentials.overline} 
                onChange={(e) => updateSectionField("differentials", "overline", e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Título</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.differentials.title} 
                onChange={(e) => updateSectionField("differentials", "title", e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Parágrafo Principal</label>
              <textarea 
                className={styles.textarea}
                value={content.differentials.paragraph} 
                onChange={(e) => updateSectionField("differentials", "paragraph", e.target.value)}
              />
            </div>

            <h3 className={styles.sectionTitle} style={{ marginTop: "2.5rem" }}>Lista de Diferenciais</h3>
            {content.differentials.items.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Índice / Número (Ex: 01)</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={item.index}
                      onChange={(e) => {
                        const newList = [...content.differentials.items];
                        newList[index].index = e.target.value;
                        updateSectionField("differentials", "items", newList);
                      }}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Título do Diferencial</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={item.title}
                      onChange={(e) => {
                        const newList = [...content.differentials.items];
                        newList[index].title = e.target.value;
                        updateSectionField("differentials", "items", newList);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Descrição Explicativa</label>
                  <textarea 
                    className={styles.textarea}
                    value={item.desc}
                    onChange={(e) => {
                      const newList = [...content.differentials.items];
                      newList[index].desc = e.target.value;
                      updateSectionField("differentials", "items", newList);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "process" && (
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Processo de Atendimento</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Overline</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.process.overline} 
                onChange={(e) => updateSectionField("process", "overline", e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Título</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.process.title} 
                onChange={(e) => updateSectionField("process", "title", e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Subtítulo / Descrição</label>
              <textarea 
                className={styles.textarea}
                value={content.process.subtitle} 
                onChange={(e) => updateSectionField("process", "subtitle", e.target.value)}
              />
            </div>

            <h3 className={styles.sectionTitle} style={{ marginTop: "2.5rem" }}>Passos da Timeline</h3>
            {content.process.steps.map((step, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Número (Ex: 01)</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={step.number}
                      onChange={(e) => {
                        const newList = [...content.process.steps];
                        newList[index].number = e.target.value;
                        updateSectionField("process", "steps", newList);
                      }}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Título do Passo</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={step.title}
                      onChange={(e) => {
                        const newList = [...content.process.steps];
                        newList[index].title = e.target.value;
                        updateSectionField("process", "steps", newList);
                      }}
                    />
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Descrição Detalhada</label>
                  <textarea 
                    className={styles.textarea}
                    value={step.description}
                    onChange={(e) => {
                      const newList = [...content.process.steps];
                      newList[index].description = e.target.value;
                      updateSectionField("process", "steps", newList);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "testimonials" && (
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Depoimentos</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Overline</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.testimonials.overline} 
                onChange={(e) => updateSectionField("testimonials", "overline", e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Título</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.testimonials.title} 
                onChange={(e) => updateSectionField("testimonials", "title", e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Subtítulo</label>
              <textarea 
                className={styles.textarea}
                value={content.testimonials.subtitle} 
                onChange={(e) => updateSectionField("testimonials", "subtitle", e.target.value)}
              />
            </div>

            <h3 className={styles.sectionTitle} style={{ marginTop: "2.5rem" }}>Depoimento em Destaque</h3>
            <div className={styles.listItem}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Texto do Depoimento</label>
                <textarea 
                  className={styles.textarea}
                  value={content.testimonials.featured.text}
                  onChange={(e) => {
                    const newFeatured = { ...content.testimonials.featured, text: e.target.value };
                    updateSectionField("testimonials", "featured", newFeatured);
                  }}
                />
              </div>
              <div className={styles.row}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Nome do Autor</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={content.testimonials.featured.name}
                    onChange={(e) => {
                      const newFeatured = { ...content.testimonials.featured, name: e.target.value };
                      updateSectionField("testimonials", "featured", newFeatured);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Cargo / Empresa do Autor</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={content.testimonials.featured.role}
                    onChange={(e) => {
                      const newFeatured = { ...content.testimonials.featured, role: e.target.value };
                      updateSectionField("testimonials", "featured", newFeatured);
                    }}
                  />
                </div>
              </div>
            </div>

            <h3 className={styles.sectionTitle} style={{ marginTop: "2.5rem" }}>Outros Depoimentos</h3>
            {content.testimonials.smallQuotes.map((quote, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.listHeader}>
                  <span className={styles.listTitle}>Depoimento #{index + 1}</span>
                  <button 
                    onClick={() => {
                      const newList = content.testimonials.smallQuotes.filter((_, i) => i !== index);
                      updateSectionField("testimonials", "smallQuotes", newList);
                    }}
                    className={styles.btnRemove}
                  >
                    Excluir
                  </button>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Texto do Depoimento</label>
                  <textarea 
                    className={styles.textarea}
                    value={quote.text}
                    onChange={(e) => {
                      const newList = [...content.testimonials.smallQuotes];
                      newList[index].text = e.target.value;
                      updateSectionField("testimonials", "smallQuotes", newList);
                    }}
                  />
                </div>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Nome do Autor</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={quote.name}
                      onChange={(e) => {
                        const newList = [...content.testimonials.smallQuotes];
                        newList[index].name = e.target.value;
                        updateSectionField("testimonials", "smallQuotes", newList);
                      }}
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>Cargo / Empresa do Autor</label>
                    <input 
                      type="text" 
                      className={styles.input}
                      value={quote.role}
                      onChange={(e) => {
                        const newList = [...content.testimonials.smallQuotes];
                        newList[index].role = e.target.value;
                        updateSectionField("testimonials", "smallQuotes", newList);
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
            <button 
              onClick={() => {
                const newList = [
                  ...content.testimonials.smallQuotes,
                  { text: "Excelente atendimento e treinamentos.", name: "Cliente", role: "Cargo" }
                ];
                updateSectionField("testimonials", "smallQuotes", newList);
              }}
              className={styles.btnAddItem}
            >
              + Adicionar Depoimento
            </button>
          </div>
        )}

        {activeTab === "faq" && (
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Perguntas Frequentes (FAQ)</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Overline</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.faq.overline} 
                onChange={(e) => updateSectionField("faq", "overline", e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Título</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.faq.title} 
                onChange={(e) => updateSectionField("faq", "title", e.target.value)}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Subtítulo / Descrição</label>
              <textarea 
                className={styles.textarea}
                value={content.faq.subtitle} 
                onChange={(e) => updateSectionField("faq", "subtitle", e.target.value)}
              />
            </div>

            <h3 className={styles.sectionTitle} style={{ marginTop: "2.5rem" }}>Lista de FAQs</h3>
            {content.faq.faqData.map((item, index) => (
              <div key={index} className={styles.listItem}>
                <div className={styles.listHeader}>
                  <span className={styles.listTitle}>FAQ #{index + 1}</span>
                  <button 
                    onClick={() => {
                      const newList = content.faq.faqData.filter((_, i) => i !== index);
                      updateSectionField("faq", "faqData", newList);
                    }}
                    className={styles.btnRemove}
                  >
                    Excluir
                  </button>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Pergunta</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={item.question}
                    onChange={(e) => {
                      const newList = [...content.faq.faqData];
                      newList[index].question = e.target.value;
                      updateSectionField("faq", "faqData", newList);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Resposta</label>
                  <textarea 
                    className={styles.textarea}
                    value={item.answer}
                    onChange={(e) => {
                      const newList = [...content.faq.faqData];
                      newList[index].answer = e.target.value;
                      updateSectionField("faq", "faqData", newList);
                    }}
                  />
                </div>
              </div>
            ))}
            <button 
              onClick={() => {
                const newList = [
                  ...content.faq.faqData,
                  { question: "Nova Pergunta?", answer: "Escreva a resposta aqui." }
                ];
                updateSectionField("faq", "faqData", newList);
              }}
              className={styles.btnAddItem}
            >
              + Adicionar FAQ
            </button>
          </div>
        )}

        {activeTab === "cta" && (
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Chamada Final (CTA)</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Overline</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.cta.overline} 
                onChange={(e) => updateSectionField("cta", "overline", e.target.value)}
              />
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label}>Título Principal</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.cta.title} 
                onChange={(e) => updateSectionField("cta", "title", e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Descrição</label>
              <textarea 
                className={styles.textarea}
                value={content.cta.desc} 
                onChange={(e) => updateSectionField("cta", "desc", e.target.value)}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Link Completo do WhatsApp</label>
                <input 
                  type="text" 
                  className={styles.input}
                  value={content.cta.whatsappUrl} 
                  onChange={(e) => updateSectionField("cta", "whatsappUrl", e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Link Telefone (Ex: tel:+5585999000534)</label>
                <input 
                  type="text" 
                  className={styles.input}
                  value={content.cta.phoneUrl} 
                  onChange={(e) => updateSectionField("cta", "phoneUrl", e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Rótulo do Telefone (Ex: Ligar: (85) 99900-0534)</label>
                <input 
                  type="text" 
                  className={styles.input}
                  value={content.cta.phoneLabel} 
                  onChange={(e) => updateSectionField("cta", "phoneLabel", e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {activeTab === "footer" && (
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Rodapé</h2>
            <div className={styles.formGroup}>
              <label className={styles.label}>Descrição da Marca (Abaixo da logo)</label>
              <textarea 
                className={styles.textarea}
                value={content.footer.brandDesc} 
                onChange={(e) => updateSectionField("footer", "brandDesc", e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Endereço Completo</label>
              <input 
                type="text" 
                className={styles.input}
                value={content.footer.address} 
                onChange={(e) => updateSectionField("footer", "address", e.target.value)}
              />
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label className={styles.label}>CNPJ</label>
                <input 
                  type="text" 
                  className={styles.input}
                  value={content.footer.cnpj} 
                  onChange={(e) => updateSectionField("footer", "cnpj", e.target.value)}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Créditos (Desenvolvido por...)</label>
                <input 
                  type="text" 
                  className={styles.input}
                  value={content.footer.credit} 
                  onChange={(e) => updateSectionField("footer", "credit", e.target.value)}
                />
              </div>
            </div>

            <h3 className={styles.sectionTitle} style={{ marginTop: "2rem", fontSize: "1.1rem" }}>Contatos Telefônicos</h3>
            {content.footer.phones.map((phone, index) => (
              <div key={index} className={styles.row}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Link Telefone {index + 1} (Ex: tel:+5585999000534)</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={phone.number}
                    onChange={(e) => {
                      const newPhones = [...content.footer.phones];
                      newPhones[index].number = e.target.value;
                      updateSectionField("footer", "phones", newPhones);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Rótulo {index + 1} (Ex: (85) 99900-0534)</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={phone.label}
                    onChange={(e) => {
                      const newPhones = [...content.footer.phones];
                      newPhones[index].label = e.target.value;
                      updateSectionField("footer", "phones", newPhones);
                    }}
                  />
                </div>
              </div>
            ))}

            <h3 className={styles.sectionTitle} style={{ marginTop: "2rem", fontSize: "1.1rem" }}>Contatos de E-mail</h3>
            {content.footer.emails.map((email, index) => (
              <div key={index} className={styles.row}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Link E-mail {index + 1} (Ex: mailto:cenadt@cenadt.com)</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={email.address}
                    onChange={(e) => {
                      const newEmails = [...content.footer.emails];
                      newEmails[index].address = e.target.value;
                      updateSectionField("footer", "emails", newEmails);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label}>Rótulo {index + 1} (Ex: cenadt@cenadt.com)</label>
                  <input 
                    type="text" 
                    className={styles.input}
                    value={email.label}
                    onChange={(e) => {
                      const newEmails = [...content.footer.emails];
                      newEmails[index].label = e.target.value;
                      updateSectionField("footer", "emails", newEmails);
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Toast Feedback */}
      {toastMsg && <div className={styles.toast}>{toastMsg}</div>}
    </div>
  );
}

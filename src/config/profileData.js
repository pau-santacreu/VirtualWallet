export const profileData = {
  personal: {
    name: "Pau Santacreu",
    role: "SysAdmin & DevOps Engineer",
    tagline: "Automatitzant infraestructures i escalant contenidors.",
    email: "contacte@exemple.com",
    linkedin: "https://linkedin.com/in/pau-santacreu",
    github: "https://github.com/el-teu-usuari",
    cvPdf: "/cv-pau.pdf" // Posa el PDF a la carpeta /public
  },
  terminal: {
    user: "root",
    host: "vegapunk",
    command: "./init_portfolio.sh"
  },
  skills: [
    { name: "Docker", icon: "🐳", level: "Expert" },
    { name: "Proxmox", icon: "🖥️", level: "Advanced" },
    { name: "Linux", icon: "🐧", level: "Expert" },
    { name: "Ansible", icon: "🤖", level: "Intermediate" },
    { name: "React", icon: "⚛️", level: "Learning" }
  ],
  projects: [
    {
      title: "Homelab Vegapunk",
      desc: "Clúster Proxmox amb alta disponibilitat, gestió de Jellyfin i *arr stack via Docker.",
      tech: ["Proxmox", "Docker", "Traefik"]
    },
    {
      title: "VPN Automatitzada",
      desc: "Desplegament de WireGuard amb Pi-hole per a bloqueig d'anuncis en xarxa.",
      tech: ["WireGuard", "Bash", "Networking"]
    }
  ]
};
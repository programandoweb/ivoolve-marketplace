import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});

export default withPWA({
  pwa: {
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    fallbacks: {
      document: "/offline",
      // Aquí puedes agregar fallbacks para otros tipos de recursos como imágenes, fuentes, etc.
    },
    workboxOptions: {
      disableDevLogs: true,
      // Otras opciones de Workbox que desees configurar
    },
  },
  images: {
    // Aquí definimos los patrones de acceso remoto a las imágenes
    // Ajusta según los hosts y dominios desde donde se deben cargar las imágenes
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "bestnaturalcbd.com.co",
      },
      {
        protocol: "https",
        hostname: "*.ivoolve.cloud",
      },
      {
        protocol: "https",
        hostname: "*.evolve.dev.programandoweb.net",
      },
      {
        protocol: "https",
        hostname: "programandoweb.net",
      },
      {
        protocol: "https",
        hostname: "**", // Permitir acceso remoto desde cualquier host
        port: "", // Opcional: definir un puerto específico si es necesario
        pathname: "**", // Opcional: definir una ruta específica si es necesario
      },
    ],
  },
});
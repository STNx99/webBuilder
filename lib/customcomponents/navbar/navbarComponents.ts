import { CustomComponent } from "../styleconstants";
import { v4 as uuidv4 } from "uuid";

export const navbarComponent: CustomComponent = {
  component: {
    type: "Frame",
    name: "NavBar",
    id: uuidv4(),
    content: "",
    isSelected: false,
    x: 0,
    y: 0,
    styles: {
      height: "50px",
      width: "100%",
      backgroundColor: "white",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      gap: "25px",
    },
    tailwindStyles: "h-[50px] w-full bg-white flex flex-row items-center justify-start px-4 md:px-8 gap-5 md:gap-6",
    elements: [
      {
        type: "Image",
        content: "Logo",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "black",
          transition:
            "background-color 0.4s ease, color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
        },
        tailwindStyles:
          "w-32 text-sm md:text-base text-gray-800 hover:scale-105 transition-transform",
        href: "/",
        src: "",
        parentId: "",
        projectId: "",
      },
      {
        type: "Link",
        content: "Home",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "black",
          margin: "0 5px",
          display: "flex",
          alignItems: "center",
          transition: "background-color 0.4s ease, color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
        },
        tailwindStyles: "m-0 text-sm md:text-base text-gray-800 flex items-center hover:text-white hover:bg-blue-500 hover:shadow-md hover:scale-105 transition-transform",
        href: "/",
        src: "",
        parentId: "",
        projectId: "",
      },
      {
        type: "Link",
        content: "About",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "black",
          margin: "0 5px",
          display: "flex",
          alignItems: "center",
          transition: "background-color 0.4s ease, color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
        },
        tailwindStyles: "m-0 text-sm md:text-base text-gray-800 flex items-center hover:text-white hover:bg-blue-500 hover:shadow-md hover:scale-105 transition-transform",
        href: "/",
        src: "",
        parentId: "",
        projectId: "",
      },
    ],
    href: "",
    src: "",
    parentId: "",
    projectId: "",
  },
};

export const navbarComponent2: CustomComponent = {
  component: {
    type: "Frame",
    name: "NavBar2",
    id: uuidv4(),
    content: "",
    isSelected: false,
    x: 0,
    y: 0,
    styles: {
      height: "60px",
      width: "100%",
      backgroundColor: "#222831",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      color: "white", 
    },
    tailwindStyles: "flex flex-col md:flex-row items-center justify-between w-full p-3 md:p-5 bg-gray-900 text-white gap-8 md:gap-10",
    elements: [
      {
        type: "Image",
        content: "LOGO",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        href: "",
        src: "",
        styles: { width: "80px", height: "80px", display: "flex", justifyContent: "center", alignItems: "center" },
        tailwindStyles: "w-20 h-20 flex justify-center items-center",
        projectId: "",
        parentId: "",
      },
      {
        type: "Frame",
        name: "Links",
        id: uuidv4(),
        content: "",
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "10px",
          color: "white", 
        },
        tailwindStyles: "flex flex-col md:flex-row items-center gap-6 md:gap-8 text-white",
        elements: [
          {
            type: "Link",
            content: "Home",
            id: uuidv4(),
            isSelected: false,
            x: 0,
            y: 0,
            styles: {
              color: "white",
              margin: "0 15px",
              fontSize: "16px",
              transition:
                "background-color 0.4s ease, color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
            },
            tailwindStyles:
              "m-2 md:m-4 text-white rounded-lg hover:text-gray-900 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:shadow-lg hover:scale-105 transition-transform",
            href: "/",
            src: "",
            parentId: "",
            projectId: "",
          },
          {
            type: "Link",
            content: "Services",
            id: uuidv4(),
            isSelected: false,
            x: 0,
            y: 0,
            styles: {
              color: "white",
              margin: "0 15px",
              fontSize: "16px",
              transition:
                "background-color 0.4s ease, color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
            },
            tailwindStyles:
              "m-2 md:m-4 text-white rounded-lg hover:text-gray-900 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:shadow-lg hover:scale-105 transition-transform",
            href: "/",
            src: "",
            parentId: "",
            projectId: "",
          },
          {
            type: "Link",
            content: "Contact",
            id: uuidv4(),
            isSelected: false,
            x: 0,
            y: 0,
            styles: {
              color: "white",
              margin: "0 15px",
              fontSize: "16px",
              transition:
                "background-color 0.4s ease, color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
            },
            tailwindStyles:
              "m-2 md:m-4 text-white rounded-lg hover:text-gray-900 hover:bg-gradient-to-r hover:from-green-400 hover:to-blue-500 hover:shadow-lg hover:scale-105 transition-transform",
            href: "/",
            src: "",
            parentId: "",
            projectId: "",
          },
        ],
        href: "",
        src: "",
        parentId: "",
        projectId: "",
        },
    ],
    href: "",
    src: "",
    parentId: "",
    projectId: "",
  },
};

export const navbarComponent3: CustomComponent = {
  component: {
    type: "Frame",
    name: "NavBar3",
    id: uuidv4(),
    content: "",
    isSelected: false,
    x: 0,
    y: 0,
    styles: {
      height: "65px",
      width: "100%",
      backgroundColor: "#f8f9fa",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      gap: "15px",
    },
    tailwindStyles: "h-[65px] w-full bg-[#f8f9fa] flex flex-col md:flex-row items-center justify-between shadow-md px-3 md:px-4 gap-3 md:gap-4",
    elements: [
      {
        type: "Link",
        content: "Home",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "#333",
          margin: "0 20px",
          fontWeight: "500",
          fontSize: "17px",
          padding: "8px 15px",
          borderRadius: "4px",
          transition: "all 0.3s ease",
        },
        tailwindStyles:
          "text-gray-800 font-medium px-2 py-1 rounded hover:bg-blue-100 text-sm md:text-base whitespace-nowrap",
        href: "/",
        src: "",
        parentId: "",
        projectId: "",
      },
      {
        type: "Link",
        content: "Products",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "#333",
          margin: "0 20px",
          fontWeight: "500",
          fontSize: "17px",
          padding: "8px 15px",
          borderRadius: "4px",
          transition: "all 0.3s ease",
        },
        tailwindStyles:
          "text-gray-800 font-medium px-2 py-1 rounded hover:bg-blue-100 text-sm md:text-base whitespace-nowrap",
        href: "/",
        src: "",
        parentId: "",
        projectId: "",
      },
      {
        type: "Link",
        content: "Gallery",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "#333",
          margin: "0 20px",
          fontWeight: "500",
          fontSize: "17px",
          padding: "8px 15px",
          borderRadius: "4px",
          transition: "all 0.3s ease",
        },
        tailwindStyles:
          "text-gray-800 font-medium px-2 py-1 rounded hover:bg-blue-100 text-sm md:text-base whitespace-nowrap",
        href: "/",
        src: "",
        parentId: "",
        projectId: "",
      },
      {
        type: "Link",
        content: "Contact",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "white",
          margin: "0 20px",
          fontWeight: "500",
          fontSize: "17px",
          padding: "8px 15px",
          borderRadius: "4px",
          backgroundColor: "#007bff",
          transition: "all 0.3s ease",
        },
        tailwindStyles:
          "text-white font-medium px-2 py-1 rounded bg-blue-500 hover:bg-blue-600 text-sm md:text-base whitespace-nowrap",
        href: "/",
        src: "",
        parentId: "",
        projectId: "",
      },
    ],
    href: "",
    src: "",
    parentId: "",
    projectId: "",
  },
};

export const navbarComponent4: CustomComponent = {
  component: {
    type: "Frame",
    name: "NavBar4",
    id: uuidv4(),
    content: "",
    isSelected: false,
    x: 0,
    y: 0,
    styles: {
      height: "70px",
      width: "100%",
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px",
      borderBottom: "1px solid #e0e0e0",
    },
    tailwindStyles:
      "h-[70px] w-full bg-transparent flex flex-col md:flex-row items-center justify-between px-3 md:px-8 border-b border-gray-300 gap-6 md:gap-8",
    elements: [
      {
        type: "Text",
        content: "BRAND",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "#333",
          fontWeight: "bold",
          fontSize: "22px",
          letterSpacing: "1px",
        },
        tailwindStyles:
          "text-gray-800 font-bold text-base md:text-xl tracking-wide",
        href: "",
        src: "",
        parentId: "",
        projectId: "",
      },
      {
        type: "Frame",
        name: "NavMenu",
        id: uuidv4(),
        content: "",
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "15px",
        },
        tailwindStyles: "flex flex-col md:flex-row items-center gap-6 md:gap-8",
        elements: [
          {
            type: "Link",
            content: "Home",
            id: uuidv4(),
            isSelected: false,
            x: 0,
            y: 0,
            styles: {
              color: "#333",
              margin: "0 20px",
              fontSize: "16px",
              position: "relative",
              textDecoration: "none",
              transition:
                "background-color 0.4s ease, color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
            },
            tailwindStyles:
              "mx-2 md:mx-4 text-gray-800 text-sm md:text-base relative no-underline rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:scale-105 transition-transform",
            href: "/",
            src: "",
            parentId: "",
            projectId: "",
          },
          {
            type: "Link",
            content: "About",
            id: uuidv4(),
            isSelected: false,
            x: 0,
            y: 0,
            styles: {
              color: "#333",
              margin: "0 20px",
              fontSize: "16px",
              position: "relative",
              textDecoration: "none",
              transition:
                "background-color 0.4s ease, color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
            },
            tailwindStyles:
              "mx-2 md:mx-4 text-gray-800 text-sm md:text-base relative no-underline rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:scale-105 transition-transform",
            href: "/",
            src: "",
            parentId: "",
            projectId: "",
          },
          {
            type: "Link",
            content: "Services",
            id: uuidv4(),
            isSelected: false,
            x: 0,
            y: 0,
            styles: {
              color: "#333",
              margin: "0 20px",
              fontSize: "16px",
              position: "relative",
              textDecoration: "none",
              transition:
                "background-color 0.4s ease, color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease",
            },
            tailwindStyles:
              "mx-2 md:mx-4 text-gray-800 text-sm md:text-base relative no-underline rounded-lg hover:text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:scale-105 transition-transform",
            href: "/",
            src: "",
            parentId: "",
            projectId: "",
          },
        ],
        href: "",
        src: "",
        parentId: "",
        projectId: "",
      },
    ],
    href: "",
    src: "",
    parentId: "",
    projectId: "",
  },
};

export const navbarComponent5: CustomComponent = {
  component: {
    type: "Frame",
    name: "NavBar5",
    id: uuidv4(),
    content: "",
    isSelected: false,
    x: 0,
    y: 0,
    styles: {
      width: "100%",
      backgroundColor: "#6200ea",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      padding: "0 15px",
      color: "white",
      gap: "30px",
    },
    tailwindStyles: "flex flex-col md:flex-row items-center h-auto w-full p-3 bg-purple-800 text-white md:justify-start gap-6 md:gap-8",
    elements: [
      {
        type: "Text",
        content: "App Name",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          marginRight: "30px",
        },
        tailwindStyles:
          "text-white font-bold text-lg md:text-xl mr-4 md:mr-8 flex-shrink-0",
        href: "",
        src: "",
        parentId: "",
        projectId: "",
      },
      {
        type: "Link",
        content: "Dashboard",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "white",
          margin: "0 15px",
          fontSize: "16px",
        },
        tailwindStyles:
          "mx-2 md:mx-4 text-white text-sm md:text-base flex-shrink-0 hover:bg-purple-600 hover:text-gray-200 hover:scale-105 transition-transform",
        href: "/",
        src: "",
        parentId: "",
        projectId: "",
      },
      {
        type: "Link",
        content: "Projects",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "white",
          margin: "0 15px",
          fontSize: "16px",
        },
        tailwindStyles:
          "mx-2 md:mx-4 text-white text-sm md:text-base flex-shrink-0 hover:bg-purple-600 hover:text-gray-200 hover:scale-105 transition-transform",
        href: "/",
        src: "",
        parentId: "",
        projectId: "",
      },
      {
        type: "Link",
        content: "Tasks",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "white",
          margin: "0 15px",
          fontSize: "16px",
        },
        tailwindStyles:
          "mx-2 md:mx-4 text-white text-sm md:text-base flex-shrink-0 hover:bg-purple-600 hover:text-gray-200 hover:scale-105 transition-transform",
        href: "/",
        src: "",
        parentId: "",
        projectId: "",
      },
      {
        type: "Link",
        content: "Settings",
        id: uuidv4(),
        isSelected: false,
        x: 0,
        y: 0,
        styles: {
          color: "white",
          margin: "0 15px",
          fontSize: "16px",
        },
        tailwindStyles:
          "mx-2 md:mx-4 text-white text-sm md:text-base flex-shrink-0 hover:bg-purple-600 hover:text-gray-200 hover:scale-105 transition-transform",
        href: "/",
        src: "",
        parentId: "",
        projectId: "",
      },
    ],
    href: "",
    src: "",
    parentId: "",
    projectId: "",
  },
};

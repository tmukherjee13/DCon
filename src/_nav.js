export default {
  items: [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: "ti-home",
      badge: {
        // variant: "info",
        // text: "NEW"
      }
    },

    {
      title: true,
      name: "Components",
      wrapper: {
        element: "",
        attributes: {}
      }
    },
    {
      name: "Calendar",
      url: "calendar",
      icon: "ti-calendar"
    },
    {
      name: "Activity",
      url: "#",
      icon: "ti-pie-chart",
      children: [
        {
          name: "WSR",
          url: "wsr",
          icon: "ti-chart"
        }
      ]
    }
  ]
};

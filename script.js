const companies = ["apple.com", "microsoft.com", "google.com"];
const apiKey = "1zMlVd+8qf3399cPxy3S9R5vGUFDxsMIy4PNHeamJ8U=";
const container = document.getElementById("brandInfo");

companies.forEach((domain) => {
  fetch(`https://api.brandfetch.io/v2/brands/${domain}`, {
    headers: { Authorization: `Bearer ${apiKey}` },
  })
    .then((res) => res.json())
    .then((data) => {
      const name = data.name;
      const desc = data.description;
      const founded = data.company?.foundedYear || "N/A";

      const location =
        data.company?.location?.city + ", " + data.company?.location?.country;
      const links = data.links
        ?.map((link) => `<a href="${link.url}">${link.name}</a>`)
        .join("");
      const colors = data.colors
        ?.map((c) => `<span class="color" style="background:${c.hex}"></span>`)
        .join("");
      const logos = data.logos
        ?.map((logo) => {
          const format = logo.formats?.[0];
          return format ? `<img src="${format.src}" alt="logo" />` : "";
        })
        .join("");

      const companyBlock = document.createElement("div");
      companyBlock.className = "company";
      companyBlock.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Description:</strong> ${desc}</p>
        <div class="logos">${logos}</div>
        <p><strong>Founded:</strong> ${founded}</p>
        <p><strong>Headquarters:</strong> ${location}</p>
        <p><strong>Colors:</strong> ${colors}</p>
        <p><strong>Links:</strong> <span class="links">${links}</span></p>
      `;

      container.appendChild(companyBlock);
    })
    .catch(console.error);
});

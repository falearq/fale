export async function about() {
  try {
   
    let res = await fetch("../json/about.json");
    let json = await res.json();
    let template = "";
    template += `
    <p>
      prueba  
      </p>
    `;
    let templateAbout = "";
    templateAbout += `<article>`;
    json.forEach(el => {
      templateAbout += `
        <div>
          <div>
            <h5>${el.titulo}</h5>
            <p>${el.descripcion}.</p>
          </div>
        </div>
       `;
    });

    templateAbout += `</article>`;

    template += `
    <section class="row row-cols-1 row-cols-md-2">
      ${templateAbout}
    </section>
    `;
    return template;   
} catch (err) {
  console.log(err);
}

}
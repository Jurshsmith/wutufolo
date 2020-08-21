

export function mountApp(selector, page){
    const app = document.querySelector(selector);
    app.innerHTML = page;
}
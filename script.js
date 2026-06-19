document.addEventListener("DOMContentLoaded", () => {
    const botaoInteracao = document.getElementById("btn-interacao");
    
    // Verifica se o botão realmente existe na página antes de continuar
    if (!botaoInteracao) return;

    // Cria a estrutura do modal em memória
    const modal = document.createElement("div");
    modal.id = "modal-informativo";
    modal.style.display = "none"; // Inicia oculto
    
    // Insere o conteúdo textual e o botão interno
    modal.innerHTML = `
        <div class="modal-conteudo">
            <h3>A Conexão Campo-Cidade</h3>
            <p>A relação entre o campo e a cidade é uma via de mão dupla essencial. Enquanto o campo alimenta as zonas urbanas e fornece a base para a indústria, a cidade devolve tecnologia, serviços de saúde, educação e ferramentas que otimizam a vida no interior. Sem essa parceria, a sociedade moderna não conseguiria se sustentar.</p>
            <button id="btn-fechar">Fechar</button>
        </div>
    `;
    
    // Insere o modal criado na página
    document.body.appendChild(modal);

    const botaoFechar = document.getElementById("btn-fechar");

    // Abrir o painel informativo
    botaoInteracao.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    // Fechar usando o botão "Fechar"
    botaoFechar.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Fechar ao clicar na área escura de fora do painel
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

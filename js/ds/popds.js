var app = new Vue({
    el: '#appc',
    data: {
      message: 'Teste com Vue!',
      nsol: "GOV-PRO-2922/22941",
      dsol: "22/05/2022",
      serv: "Remoção de entulho e bens inservivíveis",
      orgg: "COMLURB - Companhia Municipal de Limpeza Urbana",
      nomm: "João Fernandes de Almeida",
      cpfs: " 158.659.357-74",
      nomr: "Paulo Silva Souza",
      cpfr: "154.659.327-54",
      descricaocard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus accumsan purus. Vivamus non magna in magna consequat dapibus a ac ante. Suspendisse in nisl cursus, pharetra nulla dignissim, rutrum dui. Proin tristique lacus bibendum, lobortis purus vitae, scelerisque turpis. Quisque rutrum quam ut ultricies aliquam. Praesent feugiat volutpat erat ac dapibus. Curabitur eget egestas elit. Sed auctor lorem facilisis, vulputate nisl in, commodo nisl. Sed et mi elit. Duis congue est at libero consequat pulvinar. Duis imperdiet tincidunt aliquam. Etiam enim ex, volutpat eu tempus sed, feugiat vitae quam. In sed libero gravida, varius neque finibus, pretium mauris. Aliquam bibendum urna nec justo volutpat, vitae efficitur nibh tincidunt. Proin id urna volutpat, pellentesque metus vitae, pulvinar risus.",
      prti: "CID-REQ-2022/1211",
      situacao: [
        { text: 'Indeferida' },
        { text: 'Arquivada' }
        ]
    },
    methods:{
        getClass(text){
            if(text == "Indeferida") {
                return "btn btn-outline-danger btn-sm __botao-sit"
            }
            if(text == "Arquivada") {
                return "btn btn-outline-secondary btn-sm __botao-sit"
            }
            if(text == "Deferida") {
                return "btn btn-outline-success btn-sm __botao-sit"
            }
            if(text == "Deferida parcialmente") {
                return "btn btn-outline-success btn-sm __botao-sit"
            }
            if(text == "Em andamento") {
                return "btn btn-outline-primary btn-sm __botao-sit"
            }
            if(text == "Em aberto") {
                return "btn btn-outline-primary btn-sm __botao-sit"
            }
            if(text == "Cumprir Exigência") {
                return "btn btn-outline-success btn-sm __botao-sit"
            }

        }
    }
    
  });

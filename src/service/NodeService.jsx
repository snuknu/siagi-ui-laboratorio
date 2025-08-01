export const NodeService = {

    getTreeTableNodesData() {
        return [
            {
                key: '0',
                data: {
                    name: 'siagi',
                    color: 'red-100'
                },
                children: [
                    {
                        key: '0-0',
                        data: {
                            name: 'siagi-core',
                            color: 'blue-100'
                        },
                        children: [
                            { key: '0-0-1', data: { name: 'siagi-bd', color: 'blue-100' } },
                            { key: '0-0-2', data: { name: 'siagi-dto', color: 'blue-100' } },
                            { key: '0-0-3', data: { name: 'siagi-util', color: 'blue-100' } },
                            { key: '0-0-4', data: { name: 'siagi-util-fiscal', color: 'blue-100' } },
                            { key: '0-0-5', data: { name: 'siagi-util-ficha-tecnica', color: 'blue-100' } },
                            { key: '0-0-6', data: { name: 'siagi-util-swing' , color: 'blue-100'} },
                            { key: '0-0-7', data: { name: 'siagi-bo-base', color: 'blue-100' } },
                            { key: '0-0-8', data: { name: 'siagi-bo-acoes', color: 'blue-100' } },
                            { key: '0-0-9', data: { name: 'siagi-bo-comercial', color: 'blue-100' } },
                            { key: '0-0-10', data: { name: 'siagi-bo-contabilidade', color: 'blue-100' } },
                            { key: '0-0-11', data: { name: 'siagi-bo-custos' , color: 'blue-100'} },
                            { key: '0-0-12', data: { name: 'siagi-bo-engenharia', color: 'blue-100' } },
                            { key: '0-0-13', data: { name: 'siagi-bo-engenharia-industrial', color: 'blue-100' } },
                            { key: '0-0-14', data: { name: 'siagi-bo-engenharia-processos', color: 'blue-100' } },
                            { key: '0-0-15', data: { name: 'siagi-bo-estoque' , color: 'blue-100'} },
                            { key: '0-0-16', data: { name: 'siagi-bo-ficha-tecnica', color: 'blue-100' } },
                            { key: '0-0-17', data: { name: 'siagi-bo-financeiro', color: 'blue-100' } },
                            { key: '0-0-18', data: { name: 'siagi-bo-fiscal' , color: 'blue-100'} },
                            { key: '0-0-19', data: { name: 'siagi-bo-garantia-qualidade', color: 'blue-100' } },
                            { key: '0-0-20', data: { name: 'siagi-bo-gpps' , color: 'blue-100'} },
                            { key: '0-0-21', data: { name: 'siagi-bo-grc', color: 'blue-100' } },
                            { key: '0-0-22', data: { name: 'siagi-bo-laboratorio', color: 'blue-100' } },
                            { key: '0-0-23', data: { name: 'siagi-bo-logistica' , color: 'blue-100'} },
                            { key: '0-0-24', data: { name: 'siagi-bo-manufaturado', color: 'blue-100' } },
                            { key: '0-0-25', data: { name: 'siagi-bo-manutencao' , color: 'blue-100'} },
                            { key: '0-0-26', data: { name: 'siagi-bo-patrimonial', color: 'blue-100' } },
                            { key: '0-0-27', data: { name: 'siagi-bo-producao' , color: 'blue-100'} },
                            { key: '0-0-28', data: { name: 'siagi-bo-suprimentos' , color: 'blue-100'} },
                            { key: '0-0-29', data: { name: 'siagi-nfe', color: 'blue-100' } },
                            { key: '0-0-30', data: { name: 'siagi-vtex' , color: 'blue-100'} },
                            { key: '0-0-31', data: { name: 'siagi-vtex-bean' , color: 'blue-100'} },
                            { key: '0-0-32', data: { name: 'siagi-vtex-integracao' , color: 'blue-100'} },
                            { key: '0-0-33', data: { name: 'siagi-rakuten' , color: 'blue-100'} }
                        ]
                    },
                    {
                        key: '0-1',
                        data: {
                            name: 'siagi-remote',
                            color: 'green-100'
                        }
                    },
                    {
                        key: '0-2',
                        data: {
                            name: 'siagi-client',
                            color: 'yellow-100'
                        }
                    },
                    {
                        key: '0-3',
                        data: {
                            name: 'siagi-facade',
                            color: 'cyan-100'

                        }
                    },
                    {
                        key: '0-4',
                        data: {
                            name: 'siagi-j2ee',
                            color: 'pink-100'
                        },
                        children: [
                            {
                                key: '0-4-0',
                                data: {
                                    name: 'siagi-j2ee-ejb',
                                    color: 'pink-100'
                                }
                            },
                            {
                                key: '0-4-0',
                                data: {
                                    name: 'siagi-j2ee-ear',
                                    color: 'pink-100'
                                }
                            },
                        ]
                    },
                    {
                        key: '0-5',
                        data: {
                            name: 'siagi-rest',
                            color: 'indigo-100'
                        },
                        children: [
                            {
                                key: '0-4-0',
                                data: {
                                    name: 'siagi-rest-core',
                                    color: 'indigo-100'
                                }
                            },
                            {
                                key: '0-4-0',
                                data: {
                                    name: 'siagi-rest-api-springboot',
                                    color: 'indigo-100'
                                }
                            },
                        ]
                    },
                    {
                        key: '0-6',
                        data: {
                            name: 'siagi-aux',
                            color: 'red-100'
                        },
                        children: [
                            { key: '0-6-0', data: { name: 'siagi-sistemas' , color: 'red-100'} },
                            { key: '0-6-1', data: { name: 'siagi-reports' , color: 'red-100'} },
                            { key: '0-6-2', data: { name: 'siagi-etiquetas' , color: 'red-100'} },
                            { key: '0-6-3', data: { name: 'siagi-ignite' , color: 'red-100'} },
                            { key: '0-6-4', data: { name: 'siagi-ignite-estoque' , color: 'red-100'} },
                            { key: '0-6-5', data: { name: 'siagi-gnre-fiscal' , color: 'red-100'} },
                            { key: '0-6-6', data: { name: 'siagi-reinf-fiscal' , color: 'red-100'} },
                            { key: '0-6-7', data: { name: 'siagi-util-comercial' , color: 'red-100'} }
                        ]
                    },
                    {
                        key: '0-7',
                        data: {
                            name: 'siagi-nfe-emissor',
                            color: 'blue-100'
                        }
                    },
                    {
                        key: '0-8',
                        data: {
                            name: 'siagi-coletor-update',
                            color: 'green-100'
                        }
                    },
                    {
                        key: '0-9',
                        data: {
                            name: 'siagi-cs',
                            color: 'yellow-100'
                        },
                        children: [
                            { key: '0-9-0', data: { name: 'siagi-cs-base', color: 'yellow-100' } },
                            { key: '0-9-1', data: { name: 'siagi-ws-logistica' , color: 'yellow-100'} },
                            { key: '0-9-2', data: { name: 'siagi-cs-acoes' , color: 'yellow-100'} },
                            { key: '0-9-3', data: { name: 'siagi-cs-antivirus' , color: 'yellow-100'} },
                            { key: '0-9-4', data: { name: 'siagi-cs-comercial' , color: 'yellow-100'} },
                            { key: '0-9-5', data: { name: 'siagi-cs-configuracoes' , color: 'yellow-100'} },
                            { key: '0-9-6', data: { name: 'siagi-cs-contabilidade' , color: 'yellow-100'} },
                            { key: '0-9-7', data: { name: 'siagi-cs-custos' , color: 'yellow-100'} },
                            { key: '0-9-8', data: { name: 'siagi-cs-ecommerce' , color: 'yellow-100'} },
                            { key: '0-9-9', data: { name: 'siagi-cs-engenharia-industrial' , color: 'yellow-100'} },
                            { key: '0-9-10', data: { name: 'siagi-cs-engenharia-processos' , color: 'yellow-100'} },
                            { key: '0-9-11', data: { name: 'siagi-cs-engenharia' , color: 'yellow-100'} },
                            { key: '0-9-12', data: { name: 'siagi-cs-estoque' , color: 'yellow-100'} },
                            { key: '0-9-13', data: { name: 'siagi-cs-ficha-tecnica' , color: 'yellow-100'} },
                            { key: '0-9-14', data: { name: 'siagi-cs-financeiro' , color: 'yellow-100'} },
                            { key: '0-9-15', data: { name: 'siagi-cs-fiscal' , color: 'yellow-100'} },
                            { key: '0-9-16', data: { name: 'siagi-cs-garantia-qualidade' , color: 'yellow-100'} },
                            { key: '0-9-17', data: { name: 'siagi-cs-laboratorio' , color: 'yellow-100'} },
                            { key: '0-9-18', data: { name: 'siagi-cs-logistica' , color: 'yellow-100'} },
                            { key: '0-9-19', data: { name: 'siagi-cs-manutencao' , color: 'yellow-100'} },
                            { key: '0-9-20', data: { name: 'siagi-cs-padraofabricacao' , color: 'yellow-100'} },
                            { key: '0-9-21', data: { name: 'siagi-cs-patrimonial', color: 'yellow-100' } },
                            { key: '0-9-22', data: { name: 'siagi-cs-portaria', color: 'yellow-100' } },
                            { key: '0-9-23', data: { name: 'siagi-cs-prenota' , color: 'yellow-100'} },
                            { key: '0-9-24', data: { name: 'siagi-cs-producao' , color: 'yellow-100'} },
                            { key: '0-9-25', data: { name: 'siagi-cs-suprimentos', color: 'yellow-100' } },
                            { key: '0-9-26', data: { name: 'siagi-cs-aplicacao', color: 'yellow-100' } }
                        ]
                    },
                    {
                        key: '0-10',
                        data: {
                            name: 'siagi-coleta',
                            color: 'cyan-100'
                        },
                        children: [
                            { key: '0-10-0', data: { name: 'siagi-coleta-restful',color: 'cyan-100' } },
                            { key: '0-10-1', data: { name: 'siagi-coleta-update-coletor',color: 'cyan-100' } },
                            { key: '0-10-2', data: { name: 'siagi-coleta-web-update-coletor',color: 'cyan-100' } }
                        ]
                    },
                    {
                        key: '0-11',
                        data: {
                            name: 'siagi-webapp',
                            color: 'pink-100'
                        }
                    },
                    {
                        key: '0-12',
                        data: {
                            name: 'siagi-webapp-old',
                            color: 'blue-100'
                        },
                        children: [
                            { key: '0-12-0', data: { name: 'siagi-webapp-old-auth', color: 'blue-100' } },
                            { key: '0-12-1', data: { name: 'siagi-webapp-old-base', color: 'blue-100' } },
                            { key: '0-12-2', data: { name: 'siagi-webapp-old-comercial', color: 'blue-100' } },
                            { key: '0-12-3', data: { name: 'siagi-webapp-old-contabilidade', color: 'blue-100' } },
                            { key: '0-12-4', data: { name: 'siagi-webapp-old-croqui', color: 'blue-100' } },
                            { key: '0-12-5', data: { name: 'siagi-webapp-old-estoque', color: 'blue-100' } },
                            { key: '0-12-6', data: { name: 'siagi-webapp-old-exportacao', color: 'blue-100' } },
                            { key: '0-12-7', data: { name: 'siagi-webapp-old-fiscal', color: 'blue-100' } },
                            { key: '0-12-8', data: { name: 'siagi-webapp-old-garantia-qualidade', color: 'blue-100' } },
                            { key: '0-12-9', data: { name: 'siagi-webapp-old-grc', color: 'blue-100' } },
                            { key: '0-12-10', data: { name: 'siagi-webapp-old-informacoes-gerenciais', color: 'blue-100' } },
                            { key: '0-12-11', data: { name: 'siagi-webapp-old-manufaturado', color: 'blue-100' } },
                            { key: '0-12-12', data: { name: 'siagi-webapp-old-orcamentos', color: 'blue-100' } },
                            { key: '0-12-13', data: { name: 'siagi-webapp-old-participante', color: 'blue-100' } },
                            { key: '0-12-14', data: { name: 'siagi-webapp-old-pedido-exportacao', color: 'blue-100' } },
                            { key: '0-12-15', data: { name: 'siagi-webapp-old-prenota', color: 'blue-100' } },
                            { key: '0-12-16', data: { name: 'siagi-webapp-old-produto', color: 'blue-100' } },
                            { key: '0-12-17', data: { name: 'siagi-webapp-old-solicitacao-interna', color: 'blue-100' } }
                        ]
                    },
                    {
                        key: '0-13',
                        data: {
                            name: 'siagi-webapp-custos-fechamento',
                            color: 'green-100'
                        }
                    },
                ]
            }
        ];
    },

    getTreeTableNodes() {
        return Promise.resolve(this.getTreeTableNodesData());
    },

    getTreeNodes() {
        return Promise.resolve(this.getTreeNodesData());
    }
};

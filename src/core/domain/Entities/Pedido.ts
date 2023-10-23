export class Pedido {
  id?: number;

  id_cliente: number;
  valor_final: number;
  tipo_pagamento: string;
  status: string;

  constructor(data: {
    id_cliente: number;
    valor_final: number;
    tipo_pagamento: string;
    status: string;
  }) {
    this.id_cliente = data.id_cliente;
    this.valor_final = data.valor_final;
    this.tipo_pagamento = data.tipo_pagamento;
    this.status = data.status;
  }
}
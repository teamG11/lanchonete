export class Pedido {
  id?: number;

  id_cliente: number;
  valor_final: number | null;
  tipo_pagamento: string | null;
  status: string | null;
  status_pagamento: string | null;

  constructor(data: {
    id_cliente: number;
    valor_final: number | null;
    tipo_pagamento: string | null;
    status: string | null;
    status_pagamento: string | null;
  }) {
    this.id_cliente = data.id_cliente;
    this.valor_final = data.valor_final;
    this.tipo_pagamento = data.tipo_pagamento;
    this.status = data.status;
    this.status_pagamento = data.status_pagamento
  }
}
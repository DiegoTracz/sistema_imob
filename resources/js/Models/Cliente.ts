export interface FormClient {
  user: {
      email: string;
  };
  person: {
      name: string;
      documents: {
          cpf: string;
      };
  };
  customer: {
      company_name: string;
      fantasy_name: string;
      documents: {
          cnpj: string;
          creci: string;
      };
      address: {
          cep: string;
          street: string;
          number: string;
          neighborhood: string;
          city: string;
          state: string;
          complement: string;
      };
  };
}

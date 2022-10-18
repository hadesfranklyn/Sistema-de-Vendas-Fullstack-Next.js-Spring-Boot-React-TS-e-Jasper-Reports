import { httpClient } from "app/http";
import { Cliente } from "app/models/clientes";
import { Page } from "app/models/common/page";
import { AxiosResponse } from "axios";

const resourceURL: string = "/api/clientes";

export const useClienteService = () => {
    const salvar = async (cliente: Cliente): Promise<Cliente> => {
        const response: AxiosResponse<Cliente> = await httpClient.post<Cliente>(
            resourceURL,
            cliente
        );
        return response.data;
    };

    const atualizar = async (cliente: Cliente): Promise<void> => {
        const url: string = `${resourceURL}/${cliente.id}`;
        await httpClient.put<Cliente>(url, cliente);
    };

    const carregarCliente = async (id: any): Promise<Cliente> => {
        const url: string = `${resourceURL}/${id}`;
        const response: AxiosResponse<Cliente> = await httpClient.get(url);
        return response.data;
    };

    const deletar = async (id: any): Promise<void> => {
        const url: string = `${resourceURL}/${id}`;
        await httpClient.delete(url);
    };

    const find = async (
        nome: string = "",
        cpf: string = "",
        page: number = 0,
        size: number = 10
    ): Promise<Page<Cliente>> => {
        const url = `${resourceURL}?nome=${nome}&cpf=${cpf}&page=${page}&size=${size}`;
        const response: AxiosResponse<Page<Cliente>> = await httpClient.get(
            url
        );
        return response.data;
    };

    return {
        salvar,
        atualizar,
        carregarCliente,
        deletar,
        find,
    };
};

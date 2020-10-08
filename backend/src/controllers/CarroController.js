const api = require('../services/api');
const carLogos = require('../util/car-logos.json')

module.exports = {

    async indexMarca(request, response) {
        const { idMarca } = request.params;
        
        //
        try {
            const res = await api.get(`1/carros/veiculos/${idMarca}.json`);

            if(res.status == 200){
                return response.json(res.data);
            } else {
                return res;
            }

        } catch(error){
            return response.status(error.response.status).send();
        }        
    },

    async indexModelo(request, response) {
        const { idMarca, idModelo } = request.params;
        
        //
        try {
            const res = await api.get(`1/carros/veiculo/${idMarca}/${idModelo}.json`);

            if(res.status == 200){
                return response.json(res.data);
            } else {
                return res;
            }

        } catch(error){
            return response.status(error.response.status).send();
        }           
    },

    async detailModelo(request, response){
        const { idMarca, idModelo,anoMes } = request.params;
        
        //
        try {
            const res = await api.get(`1/carros/veiculo/${idMarca}/${idModelo}/${anoMes}.json`);

            if(res.status == 200){
                return response.json(res.data);
            } else {
                return res;
            }

        } catch(error){
            return response.status(error.response.status).send();
        }           
    },

    async fipeCode(request, response){
        const { idMarca, fipeCodigo } = request.params;

        //1/carros/veiculo/21/001267-0.json
        try {
            const res = await api.get(`1/carros/veiculo/${idMarca}/${fipeCodigo}.json`);

            if(res.status == 200){
                return response.json(res.data);
            } else {
                return res;
            }

        } catch(error){
            return response.status(error.response.status).send();
        }    
    },

    async fipeCodeAno(request, response){
        const { idMarca, fipeCodigo, anoMes } = request.params;
        
        //1/carros/veiculo/21/001267-0.json
        try {
            const res = await api.get(`1/carros/veiculo/${idMarca}/${fipeCodigo}/${anoMes}.json`);

            if(res.status == 200){
                return response.json(res.data);
            } else {
                return res;
            }

        } catch(error){
            return response.status(error.response.status).send();
        }    
    }
}
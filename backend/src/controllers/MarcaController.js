const api = require('../services/api');
const carLogos = require('../util/car-logos.json')

module.exports = {

    async index(request, response) {
        let data = [];
        let dataRes = [];
        let logo;

        try {
            const res = await api.get('1/carros/marcas.json');

            if(res.status == 200){
                dataRes = res.data;

                dataRes.forEach(marca => {
                    logo = carLogos.find(car => car.name == marca.fipe_name);
                    if(logo){
                        data.push({"fipe" : marca, "logo" : logo});
                    } else {
                        data.push({"fipe" : marca, "logo" : []});    
                    }
                });
                return response.json(data);
            } else {
                return response.status(res.status).send();
            }    
        } catch (error) {
            return response.status(error.response.status).send();
        }
    }
}
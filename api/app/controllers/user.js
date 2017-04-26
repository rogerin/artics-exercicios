module.exports = (app)=>{
	var User 			 = app.models.schema.User;

	var	usuarioController = {
    novo: (req, res) => {
      res.status(200).render('usuarios/novo');
    },
		criar: (req,res) => {
			User.create(
			{
				usuario: 	req.body.usuario,
				senha: 	req.body.senha
        //crypto.createHash('md5').update(req.body.password).digest("hex"),
			}
			).then(result => res.json(result))
			.catch(error => res.json(error));
		},
    listar: (req,res) => {
      console.log('list');
			User.findAll()
        .then(result => {
          console.log('result');
          res.status(200).render('usuarios/listar', { usuarios: result });
        })
			   .catch(error => {
           res.json(error);
         });
		},
		listar_json: (req,res) => {
			User.findAll()
        .then(result => res.json(result))
			   .catch(error => res.json(error));
		}


	};
		return usuarioController;
};

module.exports 	= (app)=>{

	var	user 		=  app.controllers.user;
	//,	BASE_URL 	=  "/v1/"


	app.post('/user', user.criar);
  //
  app.get('/users', user.listar_json);
  //
  app.get('/user/novo', user.novo);
  app.get('/user/listar', user.listar);


}

export async function  getWeather() {
	try{
		let peticionClima = await fetch(" http://api.travelpayouts.com/data/routes.json?token=87808ffb4e60905078249be3ff411361");
		console.log("Obtener Clima")

	}  catch (err) {
		console.log(err)
	}
}
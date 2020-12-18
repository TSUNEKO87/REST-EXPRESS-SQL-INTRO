// // const express = require("express");
// // const app = express();

// // const port = 3000;

// // const mangas = [
// //     {
// //         firstName: 'Nadine',
// //        lastName: 'Lecpa',
// //        email: 'nadinelecpa@gmail.com'
// //     },
// //     {
// //        firstName: 'Yolande',
// //        lastName: 'Larose',
// //        email: 'yolande.larose@yhoo.com'
// //     },
// // ]


// // app.use(express.json());


// // app.get("/api/mangas", (request, response) => {
// //          console.log("je suis dans la requetes get all mangas list");
// //          console.log(`nombre d'index ${mangas.length}`);  
// //          console.log(mangas);
// //          /*res.status(200).json('list all mangas');*/
        
// //         response.status(200).json({
// //             index: mangas.length,
// //             data: mangas,
// //         });
// // });


// // app.get("/api/mangas/:id", (request, response) => {
// //     console.log(`je suis dans la requetes get one manga ${request.params.id}`);
// //   let id = request.params.id - 1; //pour recuperer un id// 
// //   response.json({
// //       data: mangas[id] || null,
// //       /*let message = 'je suis dans la requetes get one manga',*/
// //       /*response.status(200).json(message)*/
// //   })
// // });



// // app.post("/api/mangas", (request, response) => {
// //     console.log("je suis dans la requetes post");
// //         let manga = {
// //              firstName: 'Albert',
// //              lastName: 'Debruxelles',
// //              email: 'albert2@gmail.com'
// //         }
// //          /*let message = `je suis dans la requetes post${json.stringify(requeste.body)}`
// //          /*faire (creeer) l'objet a post au niveau de postman body==> raw==> json */
// //         /*console.log(req.body)*/
// //         /*response.status(200).json(message)*/

// //         /*telecharger bodyparser pour parse */
        
// //         mangas.push(manga);
// //         response.json({
// //             index: mangas.length,
// //             data: mangas,
// //         })
// // });


// // app.put("/api/mangas/:id", (request, response) => {
// //     console.log("je suis dans la requetes put");

// //     let id = request.params.id - 1;
// //     let newmanga = {
// //          firstName: 'michel',
// //          lastName: 'uriel',
// //          email: 'micheluriel@gmail.com',
// //     }   
// //  mangas[id] = Object.assign(mangas[id], newmanga);    //object.assign permet de merge les deux object celui a modifié et celui qui le remplace//

// //   response.json({
// //       data: mangas[id]
// //   })
// // });


// // app.delete("/api/mangas/:id", (request, response) => {
// //  console.log('je suis dans la requete delete') 
// //     let id = request.params.id - 1
// //     mangas.splice(id, 1);
// // /*let message= '' ${id}*/
// //     response.status(200).json('bien supprimé')
// // });

// // app.listen(port, () => {
// //   console.log(`Server is runing on port ${port}`);
// // });



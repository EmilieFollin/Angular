import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

    private movies: Array<any>;
    private movie:Array<any>
    constructor() {
        this.movies = [
            {id : 1, titles : 'La casa de Papel' , releaseDates : new Date("2017-05-02"), syno : 'Huit voleurs font une prise d\'otages dans la Maison royale de la Monnaie ' +
                'd\'Espagne, tandis qu\'un génie du crime manipule la police pour mettre son plan à exécution.', note :5},
            {id : 2 ,titles : 'The Walking Dead', releaseDates : new Date("2010-10-31") , syno : 'Après une apocalypse ayant transformé la quasi-totalité de la population en zombies, ' +
                'un groupe d\'hommes et de femmes mené par l\'officier Rick Grimes tente de survivre... ', note :2},
            {id: 3, titles : 'Gossip Girl', releaseDates : new Date("2007-09-19"), syno : 'La vie de la jeunesse dorée des élèves de deux écoles privées new-yorkaises, vue à travers les yeux ironiques d\'une mystérieuse "bloggeuse" surnommée Gossip Girl. ' +
                'Entre amour et amitié, chacun tente de tirer son épingle du jeu, mais rien n\'est jamais simple derrière des apparences parfaites...', note : 3},
            {id : 4,titles : 'Orange is the New Black', releaseDates : new Date("2013-07-11"), syno : 'Entre les murs de la prison pour femmes de Litchfield, la vie n’est pas rose tous les jours.' +
                ' Rattrapées par le passé, des détenues venues d’horizons divers cohabitent dans cette société en vase clos. ' +
                'Si coups bas et tensions sont monnaie courante, l’amour, la solidarité mais surtout l’humour subsistent ' +
                'dans le quotidien des inoubliables prisonnières.', note : 1},
            {id : 5,titles : 'Stranger Things', releaseDates : new Date("2016-07-15"), syno : 'A Hawkins, en 1983 dans l\'Indiana. Lorsque Will Byers disparaît de son domicile, ses amis se lancent dans une recherche semée d’embûches pour le retrouver.' +
                ' Dans leur quête de réponses, les garçons rencontrent une étrange jeune fille en fuite. Les garçons se lient d\'amitié avec la demoiselle tatouée du chiffre "11" sur son poignet et au ' +
                'crâne rasé et découvrent petit à petit les détails sur son inquiétante situation. ' +
                'Elle est peut-être la clé de tous les mystères qui se cachent dans cette petite ville en apparence tranquille…', note : 5}
        ];
    }

    getAll(){
      return this.movies;
    }

    get( id: number){
        for(let i=0; i<this.movies.length; i++){
            if(this.movies[i].id == id){
            return this.movie = this.movies[i];
            }
            }
    }


}



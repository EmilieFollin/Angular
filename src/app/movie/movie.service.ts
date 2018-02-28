import { Injectable } from '@angular/core';
import { Movie } from './movie' ;

@Injectable()
export class MovieService {

    private movies: Array<any>;
    private movie:Array<any>
    constructor() {
        this.movies = [
            new Movie('1' ,'La casa de Papel', '2017-05-02', 'Huit voleurs font une prise d\'otages dans la Maison royale de la Monnaie d\'Espagne, tandis qu\'un génie du crime manipule la police pour mettre son plan à exécution.', '5'),
            new Movie('2','The Walking Dead', '2010-10-31', 'Après une apocalypse ayant transformé la quasi-totalité de la population en zombies, d\'un groupe d\'hommes et de femmes mené par l\'officier Rick Grimes tente de survivre... ', '2'),
            new Movie('3', 'Gossip Girl', '2007-09-19', 'La vie de la jeunesse dorée des élèves de deux écoles privées new-yorkaises, vue à travers les yeux ironiques d\'une mystérieuse "bloggeuse" surnommée Gossip Girl. Entre amour et amitié, chacun tente de tirer son épingle du jeu, mais rien n\'est jamais simple derrière des apparences parfaites...', '3'),
            new Movie('4', 'Orange is the New Black', '2013-07-11', 'Entre les murs de la prison pour femmes de Litchfield, la vie n’est pas rose tous les jours. Rattrapées par le passé, des détenues venues d’horizons divers cohabitent dans cette société en vase clos. Si coups bas et tensions sont monnaie courante, l’amour, la solidarité mais surtout l’humour subsistent dans le quotidien des inoubliables prisonnières.',  '1'),
            new Movie('5',  'Stranger Things', '2016-07-15', 'A Hawkins, en 1983 dans l\'Indiana. Lorsque Will Byers disparaît de son domicile, ses amis se lancent dans une recherche semée d’embûches pour le retrouver. Dans leur quête de réponses, les garçons rencontrent une étrange jeune fille en fuite. Les garçons se lient d\'amitié avec la demoiselle tatouée du chiffre "11" sur son poignet et au crâne rasé et découvrent petit à petit les détails sur son inquiétante situation. Elle est peut-être la clé de tous les mystères qui se cachent dans cette petite ville en apparence tranquille…',  '5'),
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



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private movies: Array<object>;
  constructor() { }

  ngOnInit() {
    this.movies = [
        {titles : 'La casa de Papel' , releaseDates : '2017', syno : 'Huit voleurs font une prise d\'otages dans la Maison royale de la Monnaie d\'Espagne, tandis qu\'un génie du crime manipule la police pour mettre son plan à exécution.'},
        {titles : 'The Walking Dead', releaseDates : '2010', syno : 'Après une apocalypse ayant transformé la quasi-totalité de la population en zombies, un groupe d\'hommes et de femmes mené par l\'officier Rick Grimes tente de survivre... Ensemble, ils vont devoir tant bien que mal faire face à ce nouveau monde devenu méconnaissable, à travers leur périple dans le Sud profond des États-Unis.'},
        {titles : 'Gossip Girl', releaseDates : '2012', syno : 'La vie de la jeunesse dorée des élèves de deux écoles privées new-yorkaises, vue à travers les yeux ironiques d\'une mystérieuse "bloggeuse" surnommée Gossip Girl. Entre amour et amitié, chacun tente de tirer son épingle du jeu, mais rien n\'est jamais simple derrière des apparences parfaites...'},
        {titles : 'Orange is the New Black', releaseDates : '2017', syno : 'Entre les murs de la prison pour femmes de Litchfield, la vie n’est pas rose tous les jours. Rattrapées par le passé, des détenues venues d’horizons divers cohabitent dans cette société en vase clos. Si coups bas et tensions sont monnaie courante, l’amour, la solidarité mais surtout l’humour subsistent dans le quotidien des inoubliables prisonnières.'},
        {titles : 'Stranger Things', releaseDates : '2017', syno : 'A Hawkins, en 1983 dans l\'Indiana. Lorsque Will Byers disparaît de son domicile, ses amis se lancent dans une recherche semée d’embûches pour le retrouver. Dans leur quête de réponses, les garçons rencontrent une étrange jeune fille en fuite. Les garçons se lient d\'amitié avec la demoiselle tatouée du chiffre "11" sur son poignet et au crâne rasé et découvrent petit à petit les détails sur son inquiétante situation. Elle est peut-être la clé de tous les mystères qui se cachent dans cette petite ville en apparence tranquille…'}
        ];
  }

  showMovie (titles) {
    alert("vous avez clique sur " + titles);

  }

}

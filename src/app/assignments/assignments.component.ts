import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  nom = "Oumayma Ezzibari"
  assignments = [
    {
      nom: "Devoir Angular de mr Buffa ",
      dateDeRendu: "22-04-2000",
      rendu: false
    },
    {
      nom: "Devoir Angular de mr Mopolo ",
      dateDeRendu: "23-04-2000",
      rendu: false
    },
    {
      nom: "Devoir Angular de mr Sergio ",
      dateDeRendu: "24-04-2000",
      rendu: true
    },
  ]
}

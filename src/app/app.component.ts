import { Component } from '@angular/core';
import { SearchNoteComponent } from './components/search-note/search-note.component';
import { NotesComponent } from './components/notes/notes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SearchNoteComponent, NotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'notes';
}

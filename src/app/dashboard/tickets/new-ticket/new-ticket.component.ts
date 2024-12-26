import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  @Output() add = new EventEmitter<{ title: string; text: string }>();

  // enteredTitle = '';
  // enteredText = '';

  // onSubmit() {
  //   const isValid = this.form?.nativeElement.checkValidity();

  //   if (isValid) {
  //     this.add.emit({
  //       title: this.enteredTitle,
  //       text: this.enteredText,
  //     });

  //     this.enteredTitle = '';
  //     this.enteredText = '';
  //   }
  // }

  onSubmit(title: string, text: string) {
    const isValid = this.form?.nativeElement.checkValidity();

    if (isValid) {
      this.add.emit({
        title,
        text,
      });

      this.form?.nativeElement.reset();
    }
  }
}

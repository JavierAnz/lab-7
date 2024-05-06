import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { ConvertComponent } from '../convert/convert.component';
import { conversion } from '../../modules/conversion.models';

@Component({
  selector: 'app-save-convert',
  standalone: true,
  imports: [ConvertComponent],
  templateUrl: './save-convert.component.html',
  styleUrl: './save-convert.component.scss'
})
export class SaveConvertComponent {

  
  @Input() data: Array<conversion> =[];
  
  @Output() BorrarProducto = new EventEmitter<conversion>
  Borrar(data:conversion){    
   this.BorrarProducto.emit(data);
  }

}

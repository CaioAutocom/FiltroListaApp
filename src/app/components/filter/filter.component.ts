import { Component, EventEmitter, Output } from '@angular/core';
import { IFilterOptions } from '../../interfaces/user/filter-options.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  filterOptions: IFilterOptions = {
    'name': undefined,
    'startDate': undefined,
    'endDate': undefined,
    status: undefined,
  }

  dateSelected(date: any) {
    console.log(date);
  }
  @Output('onFilter') onFilterEmitt = new EventEmitter<IFilterOptions>()
  
  onButtonClick(){
    this.onFilterEmitt.emit(this.filterOptions);
  }

  statusList = [
    {
      description: 'Ativo',
      value: true
    },
    {
      description: 'Inativo',
      value: false
    }
  ]
}

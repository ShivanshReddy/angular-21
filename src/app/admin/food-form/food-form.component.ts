import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { FoodService } from '../../core/services/food.service';

@Component({
  selector: 'app-food-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './food-form.component.html'
})
export class FoodFormComponent {
   private fb = inject(FormBuilder);
    private foodService = inject(FoodService);
  foodForm = this.fb.group({
    name: [''],
    price: [''],
    category: [''],
    isAvailable: [true]
  });


  submit() {
    this.foodService.addFood({
      id: Date.now(),
      ...this.foodForm.value
    } as any);

    this.foodForm.reset({ isAvailable: true });
    alert('Food added successfully ✅');
  }
}

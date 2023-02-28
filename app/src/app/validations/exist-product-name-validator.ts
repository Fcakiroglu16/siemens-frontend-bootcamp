import { AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { map } from 'rxjs';
import { PostService } from '../forms/reactive-forms/post.service';

export function ExistProductNameValidator(
  postService: PostService
): AsyncValidatorFn {
  return (control: AbstractControl) => {
    return postService
      .searchByProductName(control.value)
      .pipe(map((x) => (x.length > 0 ? { productExist: true } : null)));
  };
}

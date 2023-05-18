import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

/**Detta är mekanismen för att toggla mellan liten och stor bild.
 * Vi lag till två "decorators", tracked och action.
 * tracked fungerar som en listener och informerar ember om ändringar på element,
 * medan action notifierar att vi ska använda toggleSize metoden,
 * som är ansvarig för att ändra bildens storlek.*/

export default class RentalImageComponent extends Component {
    @tracked isLarge = false;

    @action toggleSize() {
      this.isLarge = !this.isLarge;
    }
  }

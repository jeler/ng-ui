import { storiesOf } from "@storybook/angular";
import { ButtonComponent } from "../../projects/button/src/public-api";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

storiesOf('button', module)
  .add('basic', () => ({
    component: ButtonComponent,
    props: {
      text: 'hello'
    },
    moduleMetadata: {
      imports: [MatButtonModule, MatDividerModule, MatIconModule]
    }
  }))
  .add('disabled', () => ({
    component: ButtonComponent,
    props: {
      text: 'disabled',
      disabled: true
    },
    moduleMetadata: {
      imports: [MatButtonModule, MatDividerModule, MatIconModule]
    }
  }));
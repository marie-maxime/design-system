import {Component, Prop, h} from '@stencil/core';

@Component({
  tag: 'base-component-layer',
  styleUrl: '../../global-styles.css'
})

export class BaseComponentLayer {
  @Prop() myProp: string;

  render() {
    return (
      <div>
        Inserire il componente in sviluppo come figlio di questo component
      </div>
    );
  }
}

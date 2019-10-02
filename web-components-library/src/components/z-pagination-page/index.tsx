import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'z-pagination-page',
  styleUrl: 'styles.css',
  shadow: true
})

export class ZPaginationPage {
  @Prop() pageid: string;
  @Prop() value?: number;
  @Prop() isselected: boolean = false;
  @Prop() isdisabled: boolean = false;

  render() {
    return (
      <a id={this.pageid}
        class={`${this.isselected && 'selected'} ${this.isdisabled && 'disabled'}`}
        tabindex={this.isdisabled ? -1 : 1}
      >
        {this.value}
      </a>
    );
  }
}

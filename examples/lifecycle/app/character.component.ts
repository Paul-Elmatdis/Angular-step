import { Component, EventEmitter, Input, Output, OnChanges, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Character } from './character.service';

@Component({
  selector: 'my-character',
  templateUrl: 'app/character.component.html'
})
export class CharacterComponent implements OnChanges, OnInit, AfterViewInit, OnDestroy{
  @Input() character: Character;
  @Output() onLifecycleHookFire = new EventEmitter<string>();

  ngOnChanges() {
    this.onLifecycleHookFire.emit(`ngOnChanges for ${this.character.name}`)
  }

  ngOnInit() {
    this.onLifecycleHookFire.emit(`ngOnInit for ${this.character.name}`)
  }

  ngAfterViewInit() {
    this.onLifecycleHookFire.emit(`ngAfterViewInit for ${this.character.name}`)
  }

  ngOnDestroy() {
    console.log(`ngOnDestroy for ${this.character.name}`)
  }

}


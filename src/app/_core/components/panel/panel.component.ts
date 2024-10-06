import { NgClass, NgStyle } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { generatePanels, Panel } from './panel';

@Component({
  selector: 'app-panel',
  standalone: true,
  templateUrl: 'panel.component.html',
  imports: [
    NgStyle,
    NgClass
  ],
  styleUrl: 'panel.component.scss'
})
export class PanelComponent implements OnInit, OnChanges {
  @Input()
  flipAll = false;

  panels = generatePanels(36);

  private gridSize: number;

  ngOnInit(): void {
    this.gridSize = Math.floor(this.panels.length / 6);
  }

  ngOnChanges(): void {
    this.flipAllPanels();
  }

  togglePanel(panelId: number): void {
    this.panels = this.panels.map(panel => {
      if (panel.id === panelId) {
        return { ...panel, turned: !panel.turned, visible: !panel.visible };
      }
      return panel;
    });
  }

  onMouseEnter(panelId: number): void {
    this.panels = this.panels.map((panel: Panel) => {
      if (panel.id === panelId && !panel.hovered) {
        return { ...panel, hovered: true };
      }
      return panel;
    });
  }

  onMouseLeave(panelId: number): void {
    this.panels = this.panels.map((panel: Panel) => {
      if (panel.id === panelId && panel.hovered) {
        return { ...panel, hovered: false };
      }
      return panel;
    });
  }

  getFrontPanelStyles(index: number): { [klass: string]: any } {
    const row = Math.floor(index / this.gridSize);
    const col = index % this.gridSize;
    const xPos = col * (100 / (this.gridSize - 1));
    const yPos = row * (100 / (this.gridSize - 1));

    return { 'background-position': `${ xPos }% ${ yPos }%` };
  }

  private flipAllPanels(): void {
    this.panels = this.panels.map(panel => ({ ...panel, turned: this.flipAll, visible: this.flipAll }));
  }
}

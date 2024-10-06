import { NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Panel, panels } from './panel';

@Component({
  selector: 'app-panel',
  standalone: true,
  templateUrl: 'panel.component.html',
  imports: [
    NgStyle
  ],
  styleUrl: 'panel.component.scss'
})
export class PanelComponent implements OnInit {
  panels = panels;

  ngOnInit(): void {
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
}

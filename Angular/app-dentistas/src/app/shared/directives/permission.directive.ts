import { Directive, TemplateRef, ViewContainerRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPermission]',
})
export class PermissionDirective implements OnInit {
  @Input() appPermission: string[];

  private currentRole = 'admin';

  constructor(
    private tmplRef: TemplateRef<any>,
    private vc: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.appPermission.indexOf(this.currentRole) === -1) {
      this.vc.clear();
    } else {
      this.vc.createEmbeddedView(this.tmplRef);
    }
  }
}

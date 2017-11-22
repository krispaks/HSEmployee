import { Component, OnInit, OnDestroy} from '@angular/core';
import { LaunchDarklyService } from '../../core/ld/ld.service';
 

@Component({
  selector: 'app-blog-root',
  templateUrl: './blog-root.component.html',
  styleUrls: ['./blog-root.component.css']
})
export class BlogRootComponent implements OnInit, OnDestroy {  

  showFeature: false;
  constructor(private ld: LaunchDarklyService) { }

  ngOnInit() {
    this.ld.flagChange.subscribe((flags) => {
      this.showFeature = flags['chat-feature'].current;
    });
  }

  ngOnDestroy() {
    this.ld.flagChange.unsubscribe();
  }
}

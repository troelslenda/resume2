import { Component } from '@angular/core'

@Component({
    selector: 'github-ribbon',
    styleUrls : ['src/app/githubribbon/githubribbon.css'],
    templateUrl : 'src/app/githubribbon/githubribbon.html'
})

export class githubRibbon {
    githuburl: string = 'https://github.com/troelslenda/resume'
}

import { NgModule } from "@angular/core";
import { ChessBoardComponent } from "../modules/chess-board/chess-board.component";
import { ComputerModeComponent } from "../modules/computer-mode/computer-mode.component";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../auth/login/login.component";
import { SignupComponent } from "../auth/signup/signup.component";
import { GameModeComponent } from "../game-mode/game-mode.component";

const routes: Routes = [
    {path: "", component: LoginComponent, title: "Login"},
    {path: "signup", component: SignupComponent, title:"Register"},
    {path: "login", component: LoginComponent, title: "Login"},
    {path: 'game-mode', component: GameModeComponent, title: "Game Mode"},
    { path: "against-friend", component: ChessBoardComponent, title: "Play against friend" },
    { path: "against-computer", component: ComputerModeComponent, title: "Play against computer" }

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
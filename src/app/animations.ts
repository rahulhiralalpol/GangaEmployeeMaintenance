import {
  animation,
  trigger,
  transition,
  style,
  query,
  animateChild,
  animate,
  group
} from "@angular/animations";

export const slideInAnimation = trigger("routeAnimations", [
  transition("LoginPage <=> RegisterPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("300ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ]),
  transition("* <=> FilterPage", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ left: "-100%" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("200ms ease-out", style({ left: "100%" }))]),
      query(":enter", [animate("300ms ease-out", style({ left: "0%" }))])
    ]),
    query(":enter", animateChild())
  ])
]);

export const transAnimation = animation([
  style({
    height: "{{ height }}",
    opacity: "{{ opacity }}",
    backgroundColor: "{{ backgroundColor }}"
  }),
  animate("{{ time }}")
]);
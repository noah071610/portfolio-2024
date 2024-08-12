import { Bodies, Body } from "matter-js"
import { getRandom } from "./getRandom"

export const getCircle = (x: number, y: number, radius: number, asset: string) => {
  const circle = () =>
    Bodies.circle(x, y, radius, {
      friction: 0.05,
      restitution: 0.8,
      angle: getRandom(0, 360),
      angularVelocity: 0.1,
      render: {
        sprite: {
          texture: `./images/icons/${asset}.png`,
          xScale: 1,
          yScale: 1,
        },
      },
    })

  // 랜덤한 초기 속도 설정

  const target = circle()
  Body.setVelocity(target, { x: getRandom(-1, 1), y: getRandom(0, 5) })

  return target
}

export const getRectangle = (x: number, y: number, radius: number, asset: string) => {
  const rectangle = () =>
    Bodies.rectangle(x, y, radius + 30, radius + 30, {
      friction: 0.05,
      restitution: 0.8,
      angle: getRandom(0, 360),
      angularVelocity: 0.1,
      render: {
        sprite: {
          texture: `./images/icons/${asset}.png`,
          xScale: 1,
          yScale: 1,
        }, // 여기
      },
    })

  const target = rectangle()
  Body.setVelocity(target, { x: getRandom(-1, 1), y: getRandom(0, 5) })

  return target
}

export const getPolygon = (x: number, y: number, radius: number, asset: string) => {
  const polygon = () =>
    Bodies.polygon(x, y, 6, radius, {
      friction: 0.05,
      restitution: 0.8,
      angle: getRandom(0, 360),
      angularVelocity: 0.1,
      render: {
        sprite: {
          texture: `./images/icons/${asset}.png`,
          xScale: 1,
          yScale: 1,
        }, // 여기
      },
    })

  const target = polygon()
  Body.setVelocity(target, { x: getRandom(-1, 1), y: getRandom(0, 5) })

  return target
}

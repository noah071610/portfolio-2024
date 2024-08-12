import { Bodies, Composite, Constraint, Engine, Render, Runner, World } from "matter-js"
import { RefObject, useEffect } from "react"

function useMatterEngine(canvasRef: RefObject<HTMLCanvasElement>, readyToAnimate: boolean) {
  useEffect(() => {
    if (!readyToAnimate) return
    // Create an engine
    const engine = Engine.create()

    // Create a renderer
    const render = Render.create({
      engine,
      canvas: canvasRef?.current!,
      options: {
        wireframes: false,
        background: "transparent",
        width: window.innerWidth,
        height: window.innerHeight,
      },
    })

    const world = engine.world

    const leftCloudX = window.innerWidth / 2 - 50
    const leftCloudY = -100
    const rightCloudX = window.innerWidth / 1.65 + 50
    const rightCloudY = -100

    // Create left cloud
    const leftCloud = Bodies.rectangle(leftCloudX, leftCloudY, 120, 80, {
      render: {
        sprite: {
          texture: "./images/cloud-1.png",
          xScale: 0.4,
          yScale: 0.4,
        },
      },
    })

    // Create left cloud constraint
    const leftCloudConstraint = Constraint.create({
      pointA: { x: leftCloudX, y: leftCloudY + 100 },
      bodyB: leftCloud,
      stiffness: 0.0003,
      pointB: { x: 0, y: 0 },
      length: 50,
      render: {
        strokeStyle: "#FFB75C",
      },
    })

    // Add left cloud and its constraint to the world
    Composite.add(world, [leftCloud, leftCloudConstraint])

    // Create right cloud
    const rightCloud = Bodies.rectangle(rightCloudX, rightCloudY, 100, 60, {
      render: {
        sprite: {
          texture: "./images/cloud-2.png",
          xScale: 0.3,
          yScale: 0.3,
        },
      },
    })

    // Create right cloud constraint
    const rightCloudConstraint = Constraint.create({
      pointA: { x: rightCloudX, y: rightCloudY + 100 },
      bodyB: rightCloud,
      stiffness: 0.00012,
      pointB: { x: 0, y: 0 },
      length: 60,
      render: {
        strokeStyle: "#FFB75C",
      },
    })

    // Add right cloud and its constraint to the world
    Composite.add(world, [rightCloud, rightCloudConstraint])

    // Run the engine and renderer
    setTimeout(() => {
      Render.run(render)
      Runner.run(engine)
    }, 700)

    return () => {
      Render.stop(render)
      World.clear(engine.world, false)
      Engine.clear(engine)
    }
  }, [readyToAnimate])
}

export default useMatterEngine

import { getRandom } from "@/shared/utils/getRandom"
import { getCircle, getPolygon, getRectangle } from "@/shared/utils/matter"
import cs from "classnames/bind"
import { Bodies, Engine, Mouse, MouseConstraint, Render, Runner, World } from "matter-js"
import { useEffect, useRef } from "react"
import LoadingContent from "../../widgets/loading-content"
import style from "./style.module.scss"
const cx = cs.bind(style)

export default function LoadingPage({
  closeLoadingPage,
  allLogosLoaded,
}: {
  closeLoadingPage: boolean
  allLogosLoaded: boolean
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!allLogosLoaded) return
    const engine = Engine.create({
      gravity: { x: 0, y: 1.4 },
    })
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

    const wall = 15

    const wallOptions = {
      isStatic: true,
      render: {
        fillStyle: "transparent",
      },
      friction: 0,
      frictionStatic: 0,
    }

    const topWall = Bodies.rectangle(window.innerWidth / 2, wall / 2, window.innerWidth, wall, wallOptions)

    const leftWall = Bodies.rectangle(wall / 2, window.innerHeight / 2, wall, window.innerHeight, wallOptions)

    const rightWall = Bodies.rectangle(
      window.innerWidth - wall / 2,
      window.innerHeight / 2,
      wall,
      window.innerHeight,
      wallOptions
    )

    const ground = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight - (wall + 15) / 2,
      window.innerWidth,
      wall + 15,
      wallOptions
    )

    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.3,
          render: {
            visible: false,
          },
        },
      })

    // keep the mouse in sync with rendering
    render.mouse = mouse

    const iconSize = 40
    const getY = () => {
      return -getRandom(100, 500)
    }

    const rows = [
      ["docker", "github", "nestjs", "nextjs"].map((v) =>
        getCircle(getRandom(300, window.innerWidth - 50), getY(), iconSize, v)
      ),
      [
        "aws",
        "css",
        "html",
        "javascript",
        "mysql",
        "tailwind-css",
        "typescript",
        "figma",
        "notion",
        "sass",
        "slack",
      ].map((v) => getRectangle(getRandom(300, window.innerWidth - 50), getY(), iconSize, v)),
      ["nginx", "react", "nodejs"].map((v) => getPolygon(getRandom(300, window.innerWidth - 50), getY(), iconSize, v)),
    ]

    World.add(world, [leftWall, rightWall, ground, mouseConstraint])

    Render.run(render)
    const runner = Runner.create()
    Runner.run(runner, engine)

    const sleep = 700
    setTimeout(() => {
      World.add(world, rows.flat())
    }, sleep)
    setTimeout(() => {
      World.add(world, topWall)
    }, sleep + 1000)

    return () => {
      Render.stop(render)
      World.clear(engine.world, false)
      Engine.clear(engine)
      render.canvas.remove()
    }
  }, [allLogosLoaded])

  return (
    <section
      className={cx(
        "w-screen h-screen overflow-hidden fixed top-0 left-0 bg-[#14151f]",
        closeLoadingPage ? "opacity-0 -z-40" : "opacity-100 z-[100]"
      )}
      ref={containerRef}
    >
      <canvas className={cx("relative z-10")} ref={canvasRef} />
      <LoadingContent />
    </section>
  )
}

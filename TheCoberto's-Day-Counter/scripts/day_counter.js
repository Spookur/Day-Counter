import { world, system } from "@minecraft/server";

world.afterEvents.worldInitialize.subscribe(
    () => {
        system.runInterval(
            () => {
                if (world.getTimeOfDay() == 0)
                {
                    let e = system.runInterval(() => {
                        world.sendMessage("Day: " + world.getDay());
                        system.clearRun(e)
                    })
                };
            },
        )
    }
)
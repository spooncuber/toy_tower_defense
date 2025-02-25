
class AStarPlanner {
    constructor(grid_map, h_ratio) {
        this.grid_map = grid_map;
        // f = g_ratio * g + h_ratio * h
        this.h_ratio = h_ratio;
        this.g_ratio = 1.0 - this.h_ratio;
    }

    compute_path(start_px, start_py) {
        var path = [];
        var open_set = [{
            x: this.start_gx,
            y: this.start_gy,
            cost: 0.0
        }];
        var close_set = [];
        while (open_set.length != 0) {
            // sort nodes in openset
            open_set.sort(function (lhs, rhs) {
                if (lhs.cost < rhs.cost) {
                    return -1;
                }
                if (lhs.cost > rhs.cost) {
                    return 1;
                }
                return 0;
            });

            var current = open_set.shift();
            path.push(current);
            close_set.push(current);

            if (this.is_destination(current)) {
                break;
            }

            var neighbours = get_neighbours(current);

        }

        return path;
    }

    get_neighbours(node) {

    }

    is_destination(node) {
        return (this.dest_px == node.x && this.dest_py == node.y);
    }
}

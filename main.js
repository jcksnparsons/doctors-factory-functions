const doctorDetails = (name, specialty, address) => {
    return {
        "name": name,
        "specialty": specialty,
        "address": address,
    }
}

const drWeissman = doctorDetails("Dr. Abraham Weissman", "Oncology", "138 Central Park W, Apt. 4C")

console.log(drWeissman)


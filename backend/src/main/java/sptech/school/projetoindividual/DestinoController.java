package sptech.school.projetoindividual;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/destinos")
@CrossOrigin(origins = "*")
public class DestinoController {

    private final DestinoRepositorio repositorio;

    public DestinoController(DestinoRepositorio repositorio) {
        this.repositorio = repositorio;
    }

    @GetMapping
    public List<Destino> listarTodos() {
        return repositorio.findAll();
    }

    @PostMapping
    public Destino cadastrar(@RequestBody Destino destino) {
        return repositorio.save(destino);
    }
}
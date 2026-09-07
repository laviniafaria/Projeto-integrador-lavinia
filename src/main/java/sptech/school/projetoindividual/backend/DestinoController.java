package sptech.school.projetoindividual;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/destinos")
@CrossOrigin(origins = "*")
public class DestinoController {

    private final DestinoRepository repository;

    public DestinoController(DestinoRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Destino> listarTodos() {
        return repository.findAll();
    }

    @PostMapping
    public Destino cadastrar(@RequestBody Destino destino) {
        return repository.save(destino);
    }
}
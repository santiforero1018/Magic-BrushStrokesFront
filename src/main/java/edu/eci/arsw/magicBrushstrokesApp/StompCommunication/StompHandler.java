package edu.eci.arsw.magicBrushstrokesApp.StompCommunication;


import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.simp.SimpMessagingTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
/**
 * This class have the obligation to manage the message between publisher
 * And suscriber
 * 
 * @author Juan Sebastian Cepeda
 * @author Juan Pablo Daza Pinzon
 * @author Santiago Forero Yate
 */

@Controller
public class StompHandler {
    
}
